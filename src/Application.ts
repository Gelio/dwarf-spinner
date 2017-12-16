import { Body, NaiveBroadphase, Plane, Sphere, Vec3, World } from 'cannon';
import { mat4, vec3 } from 'gl-matrix';

import { ShaderType } from 'common/ShaderType';

import { WebGLProgramFacade } from 'facades/WebGLProgramFacade';
import { Camera } from 'models/Camera';

import { ImageLoader } from 'services/ImageLoader';
import { MatrixTransformer } from 'services/MatrixTransformer';
import { ModelPrototypeLoader } from 'services/ModelPrototypeLoader';
import { ProjectionService } from 'services/ProjectionService';
import { ShaderCompiler } from 'services/ShaderCompiler';

import { ApplicationWebGLAttributes } from 'interfaces/ApplicationWebGLAttributes';
import { ApplicationWebGLUniforms } from 'interfaces/ApplicationWebGLUniforms';
import { Model } from 'models/Model';
import { Renderer } from 'Renderer';

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
  private programFacade: WebGLProgramFacade;
  private projectionMatrix: mat4;

  private renderer: Renderer;

  private model: Model;

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

    this.initProjectionMatrix();
    this.initCamera();
    this.initRenderer();

    this.initWorld();

    await this.loadModel();

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

    const modelMatrix = this.model.modelMatrix;
    const modelBody = this.model.body;

    mat4.identity(modelMatrix);
    this.matrixTransformer.identity(modelMatrix);
    this.matrixTransformer.rotate(modelMatrix, modelBody.quaternion.w, [
      modelBody.quaternion.x,
      modelBody.quaternion.y,
      modelBody.quaternion.z
    ]);
    this.matrixTransformer.translate(modelMatrix, [
      modelBody.position.x,
      modelBody.position.z,
      modelBody.position.y
    ]);

    mat4.rotateY(this.model.modelMatrix, this.model.modelMatrix, 0.01);

    this.renderer.clearCanvas();
    this.renderer.drawModel(this.model);
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
      this.webGLAttributes,
      this.webGLUniforms
    );

    this.renderer.init();
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

  private async loadModel() {
    const imageLoader = new ImageLoader();
    const modelPrototypeLoader = new ModelPrototypeLoader(this.gl, imageLoader);
    const modelPrototype = await modelPrototypeLoader.loadModelPrototype(
      'assets/models/AVMT300-centered.json',
      'assets/textures/missile-texture.jpg'
    );

    const modelBody = new Body({ mass: 500, position: new Vec3(0, 0, 10) });
    const sphereShape = new Sphere(2);
    modelBody.addShape(sphereShape);
    this.world.addBody(modelBody);

    modelBody.angularVelocity.y = 5;
    modelBody.angularDamping = 0.5;

    this.model = new Model(modelPrototype, modelBody);

    const scaleFactor = 1 / 2;
    mat4.scale(this.model.modelMatrix, this.model.modelMatrix, [
      scaleFactor,
      scaleFactor,
      scaleFactor
    ]);
  }

  private initWorld() {
    this.world = new World();
    this.world.gravity.set(0, 0, -9.81);
    this.world.broadphase = new NaiveBroadphase();

    const groundShape = new Plane();
    const groundBody = new Body({ mass: 0 });
    groundBody.addShape(groundShape);

    this.world.addBody(groundBody);
  }
}
