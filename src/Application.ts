import { Body, Box, NaiveBroadphase, Plane, Vec3, World } from 'cannon';
import { mat4 } from 'gl-matrix';

import { ShaderType } from 'common/ShaderType';

import { WebGLProgramFacade } from 'facades/WebGLProgramFacade';
import { Camera } from 'models/Camera';
import { PhysicalModel } from 'models/PhysicalModel';

import { CoordinateConverter } from 'services/CoordinateConverter';
import { ImageLoader } from 'services/ImageLoader';
import { ModelPrototypeLoader } from 'services/ModelPrototypeLoader';
import { ProjectionService } from 'services/ProjectionService';
import { Renderer } from 'services/Renderer';
import { ShaderCompiler } from 'services/ShaderCompiler';
import { WebGLBinder } from 'services/WebGLBinder';

import { ApplicationWebGLAttributes } from 'interfaces/ApplicationWebGLAttributes';
import { ApplicationWebGLUniforms } from 'interfaces/ApplicationWebGLUniforms';
import { Model } from 'interfaces/Model';
import { BodilessModel } from 'models/BodilessModel';

// tslint:disable no-require-imports import-name no-var-requires
const fragmentShaderSource = require('./shaders/fragment-shader.glsl');
const vertexShaderSource = require('./shaders/vertex-shader.glsl');
// tslint:enable no-require-imports, import-name

export class Application {
  private readonly canvas: HTMLCanvasElement;
  private readonly gl: WebGLRenderingContext;

  private camera: Camera;
  private webGLAttributes: ApplicationWebGLAttributes;
  private webGLUniforms: ApplicationWebGLUniforms;
  private webGLBinder: WebGLBinder;
  private programFacade: WebGLProgramFacade;
  private projectionMatrix: mat4;

  private renderer: Renderer;

  private models: Model[] = [];
  private cameraTarget: PhysicalModel;

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

    await Promise.all([
      this.loadMissileModel(),
      this.loadGroundModel(),
      this.loadCubeModel()
    ]);

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

    const targetPosition = this.cameraTarget.body.position;

    CoordinateConverter.physicsToRendering(this.camera.target, targetPosition);
    this.renderer.refreshCamera();

    this.renderer.clearCanvas();

    this.models.forEach(model => this.renderer.drawModel(model));
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
    const position = new Vec3(0, -5, 2);
    const target = new Vec3(0, 0, 0);

    this.camera = new Camera(
      CoordinateConverter.physicsToRendering(position),
      CoordinateConverter.physicsToRendering(target)
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
    this.webGLBinder = new WebGLBinder(
      this.gl,
      this.webGLUniforms,
      this.webGLAttributes
    );
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

    const scaleVector = CoordinateConverter.physicsToRendering(
      new Vec3(0.5, 0.5, 0.5)
    );

    mat4.scale(
      modelPrototype.modelMatrix,
      modelPrototype.modelMatrix,
      scaleVector
    );

    // const modelBody = new Body({ mass: 500, position: new Vec3(0, 0, 20) });
    // const sphereShape = new Box(new Vec3(9, 5, 5));
    // modelBody.addShape(sphereShape);
    // this.world.addBody(modelBody);

    // modelBody.angularVelocity.y = -5;
    // modelBody.velocity.z = 20;
    // modelBody.angularDamping = 0.5;

    // const missile = new Model(modelPrototype, modelBody);
    // this.models.push(missile);
  }

  private async loadGroundModel() {
    // FIXME: use common ImageLoader and ModelPrototypeLoader
    const imageLoader = new ImageLoader();
    const modelPrototypeLoader = new ModelPrototypeLoader(this.gl, imageLoader);
    const modelPrototype = await modelPrototypeLoader.loadModelPrototype(
      'assets/models/ground.json',
      'assets/textures/ground_dirt_1226_9352_Small.jpg'
    );

    const scaleVector = CoordinateConverter.physicsToRendering(
      new Vec3(5, 5, 1)
    );
    mat4.scale(
      modelPrototype.modelMatrix,
      modelPrototype.modelMatrix,
      scaleVector
    );

    const groundShape = new Plane();
    const groundBody = new Body({ mass: 0 });
    groundBody.addShape(groundShape);
    this.world.addBody(groundBody);

    for (let x = -5; x <= 5; x += 1) {
      for (let y = -5; y <= 5; y += 1) {
        const ground = new BodilessModel(modelPrototype);

        const translationVector = CoordinateConverter.physicsToRendering(new Vec3(x, y, 0));
        mat4.translate(ground.modelMatrix, ground.modelMatrix, translationVector);

        this.models.push(ground);
      }
    }
  }

  private async loadCubeModel() {
    // FIXME: use common ImageLoader and ModelPrototypeLoader
    const imageLoader = new ImageLoader();
    const modelPrototypeLoader = new ModelPrototypeLoader(this.gl, imageLoader);
    const modelPrototype = await modelPrototypeLoader.loadModelPrototype(
      'assets/models/cube.json',
      'assets/textures/f16-texture.bmp'
    );

    const scaleVector = CoordinateConverter.physicsToRendering(
      new Vec3(1, 1, 1)
    );
    mat4.scale(
      modelPrototype.modelMatrix,
      modelPrototype.modelMatrix,
      scaleVector
    );

    const modelBody = new Body({ mass: 5, position: new Vec3(0, 0, 5) });
    const shape = new Box(new Vec3(0.5, 0.5, 0.5));
    modelBody.addShape(shape);
    this.world.addBody(modelBody);

    const cube = new PhysicalModel(modelPrototype, modelBody);
    this.models.push(cube);

    this.cameraTarget = cube;
  }

  private initWorld() {
    this.world = new World();
    this.world.gravity.set(0, 0, -9.81);
    this.world.broadphase = new NaiveBroadphase();
  }
}
