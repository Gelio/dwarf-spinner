import { NaiveBroadphase, Vec3, World } from 'cannon';
import { mat4 } from 'gl-matrix';

import { configuration } from 'configuration';

import { ShaderType } from 'common/ShaderType';

import { WebGLProgramFacade } from 'facades/WebGLProgramFacade';
import { ApplicationWorld } from 'models/ApplicationWorld';
import { Camera } from 'models/Camera';

import { CoordinateConverter } from 'services/CoordinateConverter';
import { ImageLoader } from 'services/ImageLoader';
import { ModelPrototypeLoader } from 'services/ModelPrototypeLoader';
import { ProjectionService } from 'services/ProjectionService';
import { Renderer } from 'services/Renderer';
import { ShaderCompiler } from 'services/ShaderCompiler';
import { WebGLBinder } from 'services/WebGLBinder';

import { ApplicationWebGLAttributes } from 'interfaces/ApplicationWebGLAttributes';
import { ApplicationWebGLUniforms } from 'interfaces/ApplicationWebGLUniforms';
import { WorldLoader } from 'services/WorldLoader';

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

  private world: ApplicationWorld;
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

    await this.initWorld();

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
    timeDelta = Math.min(timeDelta, configuration.maxPhysicsWorldTimeAdvance);
    this.world.physicsWorld.step(timeDelta);

    const targetPosition = this.world.dwarf.body.position;

    CoordinateConverter.physicsToRendering(this.camera.target, targetPosition);
    this.renderer.refreshCamera();

    this.renderer.clearCanvas();

    this.world.models.forEach(model => this.renderer.drawModel(model));
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

  // private async loadMissileModel() {
  //   const imageLoader = new ImageLoader();
  //   const modelPrototypeLoader = new ModelPrototypeLoader(this.gl, imageLoader);
  //   const modelPrototype = await modelPrototypeLoader.loadModelPrototype(
  //     'assets/models/AVMT300-centered2.json',
  //     'assets/textures/missile-texture.jpg'
  //   );

  //   const scaleVector = CoordinateConverter.physicsToRendering(
  //     new Vec3(0.5, 0.5, 0.5)
  //   );

  //   mat4.scale(
  //     modelPrototype.modelMatrix,
  //     modelPrototype.modelMatrix,
  //     scaleVector
  //   );

  //   const modelBody = new Body({ mass: 500, position: new Vec3(0, 0, 20) });
  //   const sphereShape = new Box(new Vec3(9, 5, 5));
  //   modelBody.addShape(sphereShape);
  //   this.world.addBody(modelBody);

  //   modelBody.angularVelocity.y = -5;
  //   modelBody.velocity.z = 20;
  //   modelBody.angularDamping = 0.5;

  //   const missile = new Model(modelPrototype, modelBody);
  //   this.models.push(missile);
  // }

  private async initWorld() {
    const physicsWorld = new World();
    physicsWorld.gravity.set(0, 0, -9.81);
    physicsWorld.broadphase = new NaiveBroadphase();

    const imageLoader = new ImageLoader();
    const modelPrototypeLoader = new ModelPrototypeLoader(this.gl, imageLoader);
    const worldLoader = new WorldLoader(modelPrototypeLoader);

    this.world = await worldLoader.loadWorld(physicsWorld);
  }
}
