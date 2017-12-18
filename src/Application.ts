import { Body, Box, NaiveBroadphase, Plane, Vec3, World } from 'cannon';
import { mat4, vec3 } from 'gl-matrix';

import { ShaderType } from 'common/ShaderType';

import { WebGLProgramFacade } from 'facades/WebGLProgramFacade';
import { Camera } from 'models/Camera';
import { Model } from 'models/Model';

import { ImageLoader } from 'services/ImageLoader';
import { MatrixTransformer } from 'services/MatrixTransformer';
import { ModelPrototypeLoader } from 'services/ModelPrototypeLoader';
import { ProjectionService } from 'services/ProjectionService';
import { ShaderCompiler } from 'services/ShaderCompiler';

import { ApplicationWebGLAttributes } from 'interfaces/ApplicationWebGLAttributes';
import { ApplicationWebGLUniforms } from 'interfaces/ApplicationWebGLUniforms';
import { Renderer } from 'Renderer';
import { WebGLBinder } from 'WebGLBinder';

// tslint:disable no-require-imports import-name no-var-requires
const fragmentShaderSource = require('./shaders/fragment-shader.glsl');
const vertexShaderSource = require('./shaders/vertex-shader.glsl');
// tslint:enable no-require-imports, import-name

export class Application {
  private readonly canvas: HTMLCanvasElement;
  private readonly gl: WebGLRenderingContext;
  private readonly matrixTransformer: MatrixTransformer;

  private camera: Camera;
  private webGLAttributes: ApplicationWebGLAttributes;
  private webGLUniforms: ApplicationWebGLUniforms;
  private webGLBinder: WebGLBinder;
  private programFacade: WebGLProgramFacade;
  private projectionMatrix: mat4;

  private renderer: Renderer;

  private missile: Model;
  private bricks: Model;

  private world: World;
  private previousRenderTimestamp: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    const gl = this.canvas.getContext('webgl');
    if (!gl) {
      throw new Error('WebGL not supported');
    }
    this.gl = gl;

    this.render = this.render.bind(this);
    this.matrixTransformer = new MatrixTransformer();
  }

  public async init() {
    this.initProgram();
    this.loadAttributes();
    this.loadUniforms();
    this.initWebGLBinder();

    this.initProjectionMatrix();
    this.initCamera();
    this.initRenderer();

    this.initWorld();

    await Promise.all([this.loadMissileModel(), this.loadBricksModel()]);

    this.render();
  }

  private render(timestamp?: number) {
    requestAnimationFrame(this.render);

    let timeDelta = 0;
    if (timestamp) {
      if (this.previousRenderTimestamp) {
        timeDelta = (timestamp - this.previousRenderTimestamp) / 1000;
      }

      this.previousRenderTimestamp = timestamp;
    }
    this.world.step(timeDelta);

    const missilePosition = this.missile.body.position;

    this.camera.targetDirection = vec3.fromValues(missilePosition.x, missilePosition.y, missilePosition.z);
    this.renderer.refreshCamera();

    this.renderer.clearCanvas();
    this.renderer.drawModel(this.missile);

    this.renderer.drawModel(this.bricks);
  }

  private loadAttributes() {
    const gl = this.gl;
    const program = this.programFacade.program;

    const vertexPositionAttribute = gl.getAttribLocation(
      program,
      'aVertexPosition'
    );
    gl.enableVertexAttribArray(vertexPositionAttribute);

    const textureCoordsAttribute = gl.getAttribLocation(
      program,
      'aTextureCoords'
    );
    gl.enableVertexAttribArray(textureCoordsAttribute);

    this.webGLAttributes = {
      vertexPosition: vertexPositionAttribute,
      textureCoords: textureCoordsAttribute
    };
  }

  private loadUniforms() {
    const gl = this.gl;
    const program = this.programFacade.program;

    const modelMatrixUniform = <WebGLUniformLocation>gl.getUniformLocation(
      program,
      'uModelMatrix'
    );
    const viewMatrixUniform = <WebGLUniformLocation>gl.getUniformLocation(
      program,
      'uViewMatrix'
    );
    const projectionMatrixUniform = <WebGLUniformLocation>gl.getUniformLocation(
      program,
      'uProjectionMatrix'
    );
    const textureSamplerUniform = <WebGLUniformLocation>gl.getUniformLocation(
      program,
      'uTextureSampler'
    );

    this.webGLUniforms = {
      modelMatrix: modelMatrixUniform,
      viewMatrix: viewMatrixUniform,
      projectionMatrix: projectionMatrixUniform,
      textureSampler: textureSamplerUniform
    };
  }

  private initProjectionMatrix() {
    const projectionService = new ProjectionService();
    this.projectionMatrix = projectionService.createProjectionMatrix(
      45,
      this.canvas.width / this.canvas.height,
      0.1,
      100
    );
  }

  private initCamera() {
    this.camera = new Camera(
      vec3.fromValues(0, 20, -20),
      vec3.fromValues(0, 0, 0)
    );
  }

  private initRenderer() {
    this.renderer = new Renderer(
      this.canvas,
      this.gl,
      this.projectionMatrix,
      this.camera,
      this.webGLBinder
    );

    this.renderer.init();
  }

  private initWebGLBinder() {
    this.webGLBinder = new WebGLBinder(this.gl, this.webGLUniforms, this.webGLAttributes);
  }

  private initProgram() {
    const shaderCompiler = new ShaderCompiler(this.gl);

    const vertexShader = shaderCompiler.compileShader(
      vertexShaderSource,
      ShaderType.VertexShader
    );
    const fragmentShader = shaderCompiler.compileShader(
      fragmentShaderSource,
      ShaderType.FragmentShader
    );

    this.programFacade = new WebGLProgramFacade(
      this.gl,
      vertexShader,
      fragmentShader
    );
    this.programFacade.use();
  }

  private async loadMissileModel() {
    const imageLoader = new ImageLoader();
    const modelPrototypeLoader = new ModelPrototypeLoader(this.gl, imageLoader);
    const modelPrototype = await modelPrototypeLoader.loadModelPrototype(
      'assets/models/AVMT300-centered2.json',
      'assets/textures/missile-texture.jpg'
    );
    this.matrixTransformer.scale(modelPrototype.modelMatrix, [0.5, 0.5, 0.5]);

    const modelBody = new Body({ mass: 500, position: new Vec3(0, 0, 20) });
    const sphereShape = new Box(new Vec3(9, 5, 5));
    modelBody.addShape(sphereShape);
    this.world.addBody(modelBody);

    modelBody.angularVelocity.y = -5;
    modelBody.velocity.z = 20;
    modelBody.angularDamping = 0.5;

    this.missile = new Model(this.matrixTransformer, modelPrototype, modelBody);
  }

  private async loadBricksModel() {
    // FIXME: use common ImageLoader and ModelPrototypeLoader
    const imageLoader = new ImageLoader();
    const modelPrototypeLoader = new ModelPrototypeLoader(this.gl, imageLoader);
    const modelPrototype = await modelPrototypeLoader.loadModelPrototype(
      'assets/models/bricks.json',
      'assets/textures/bricks.jpg'
    );

    this.matrixTransformer.scale(modelPrototype.modelMatrix, [3, 3, 3]);

    const groundShape = new Plane();
    const groundBody = new Body({ mass: 0 });
    groundBody.addShape(groundShape);
    this.world.addBody(groundBody);

    this.bricks = new Model(this.matrixTransformer, modelPrototype, groundBody);
  }

  private initWorld() {
    this.world = new World();
    this.world.gravity.set(0, 0, -9.81);
    this.world.broadphase = new NaiveBroadphase();
  }
}
