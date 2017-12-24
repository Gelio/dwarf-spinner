import { NaiveBroadphase, Vec3, World } from 'cannon';
import { mat4 } from 'gl-matrix';

import { configuration } from 'configuration';

import { ShadingModelType } from 'common/ShadingModelType';

import { WebGLProgramFacade } from 'facades/WebGLProgramFacade';
import { ApplicationWorld } from 'models/ApplicationWorld';
import { Camera } from 'models/Camera';

import { CoordinateConverter } from 'services/CoordinateConverter';
import { ImageLoader } from 'services/ImageLoader';
import { ModelPrototypeLoader } from 'services/ModelPrototypeLoader';
import { ProjectionService } from 'services/ProjectionService';
import { Renderer } from 'services/Renderer';
import { ShaderCompiler } from 'services/ShaderCompiler';
import { WebGLAttributeLoader } from 'services/WebGLAttributeLoader';
import { WebGLBinder } from 'services/WebGLBinder';
import { WebGLUniformLoader } from 'services/WebGLUniformLoader';
import { WorldLoader } from 'services/WorldLoader';

import { ApplicationWebGLAttributes } from 'interfaces/ApplicationWebGLAttributes';
import { ApplicationWebGLUniforms } from 'interfaces/ApplicationWebGLUniforms';

import { ApplicationEventEmitter } from 'events/ApplicationEventEmitter';
import { NewIlluminationModelTypeEvent } from 'events/NewIlluminationModelTypeEvent';
import { NewShadingModelTypeEvent } from 'events/NewShadingModelTypeEvent';

import { GouraudShadingProgramFactory } from 'programs/GouraudShadingProgramFactory';
import { PhongShadingProgramFactory } from 'programs/PhongShadingProgramFactory';

import 'store';

interface ProgramsDictionary {
  [shaderType: number]: WebGLProgramFacade;
}

export class Application {
  public readonly eventEmitter: ApplicationEventEmitter;

  private readonly canvas: HTMLCanvasElement;
  private readonly gl: WebGLRenderingContext;

  private camera: Camera;
  private webGLAttributes: ApplicationWebGLAttributes;
  private webGLUniforms: ApplicationWebGLUniforms;
  private webGLBinder: WebGLBinder;
  private projectionMatrix: mat4;

  private programs: ProgramsDictionary;
  private currentProgram: WebGLProgramFacade;

  private renderer: Renderer;

  private world: ApplicationWorld;
  private previousRenderTimestamp: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.eventEmitter = new ApplicationEventEmitter();

    const gl = this.canvas.getContext('webgl');
    if (!gl) {
      throw new Error('WebGL not supported');
    }
    this.gl = gl;

    this.render = this.render.bind(this);
    this.onNewIlluminationModelType = this.onNewIlluminationModelType.bind(this);
    this.onNewShadingModelType = this.onNewShadingModelType.bind(this);
  }

  public async init() {
    this.bindToEvents();

    this.initProjectionMatrix();
    this.initCamera();

    this.initPrograms();
    this.changeShadingModelType(configuration.defaultShadingModelType);

    await this.initWorld();

    this.render();
  }

  private bindToEvents() {
    this.eventEmitter.on(NewIlluminationModelTypeEvent.name, this.onNewIlluminationModelType);

    this.eventEmitter.on(NewShadingModelTypeEvent.name, this.onNewShadingModelType);
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
    this.world.physicsWorld.step(timeDelta * configuration.physicsSpeed);

    const targetPosition = this.world.dwarf.body.position;

    CoordinateConverter.physicsToRendering(this.camera.target, targetPosition);
    this.renderer.refreshCamera();
    this.webGLBinder.bindViewerPosition(this.camera.position);

    this.renderer.clearCanvas();

    this.world.models.forEach(model => this.renderer.drawModel(model));
  }

  private loadAttributes() {
    const attributeLoader = new WebGLAttributeLoader(this.gl, this.currentProgram);

    this.webGLAttributes = attributeLoader.loadAttributes();
  }

  private loadUniforms() {
    const uniformLoader = new WebGLUniformLoader(this.gl, this.currentProgram);

    this.webGLUniforms = uniformLoader.loadUniforms();
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
    this.webGLBinder = new WebGLBinder(this.gl, this.webGLUniforms, this.webGLAttributes);
  }

  private initPrograms() {
    const shaderCompiler = new ShaderCompiler(this.gl);
    const gouraudShadingProgramFactory = new GouraudShadingProgramFactory(shaderCompiler, this.gl);
    gouraudShadingProgramFactory.compile();

    const phongShadingProgramFactory = new PhongShadingProgramFactory(shaderCompiler, this.gl);
    phongShadingProgramFactory.compile();

    this.programs = {
      [ShadingModelType.Gouraud]: gouraudShadingProgramFactory.compiledProgram,
      [ShadingModelType.Phong]: phongShadingProgramFactory.compiledProgram
    };
    this.currentProgram = this.programs[configuration.defaultShadingModelType];
  }

  private async initWorld() {
    const physicsWorld = new World();
    physicsWorld.gravity.set(0, 0, -9.81);
    physicsWorld.broadphase = new NaiveBroadphase();

    const imageLoader = new ImageLoader();
    const modelPrototypeLoader = new ModelPrototypeLoader(this.gl, imageLoader);
    const worldLoader = new WorldLoader(modelPrototypeLoader);

    this.world = await worldLoader.loadWorld(physicsWorld);
  }

  private changeShadingModelType(newShadingModelType: ShadingModelType) {
    const programFacade = this.programs[newShadingModelType];
    if (!programFacade) {
      throw new Error(`Program for shading model type ${newShadingModelType} does not exist`);
    }

    this.currentProgram = programFacade;
    programFacade.use();

    this.loadAttributes();
    this.loadUniforms();
    this.initWebGLBinder();
    this.webGLBinder.bindAmbientLightColor(configuration.ambientLightColor);
    this.webGLBinder.bindPointLight(
      configuration.pointLightPosition,
      configuration.pointLightColor
    );
    this.webGLBinder.bindIlluminationModelType(configuration.defaultIlluminationModelType);

    this.initRenderer();
  }

  private onNewIlluminationModelType(event: NewIlluminationModelTypeEvent) {
    this.webGLBinder.bindIlluminationModelType(event.illuminationModelType);
  }

  private onNewShadingModelType(event: NewShadingModelTypeEvent) {
    this.changeShadingModelType(event.shadingModelType);
  }
}
