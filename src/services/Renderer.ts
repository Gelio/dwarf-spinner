import { mat4 } from 'gl-matrix';

import { Camera } from 'interfaces/Camera';
import { Model } from 'interfaces/Model';

import { WebGLBinder } from 'services/WebGLBinder';

export class Renderer {
  private readonly canvas: HTMLCanvasElement;
  private readonly gl: WebGLRenderingContext;

  private readonly projectionMatrix: mat4;
  private readonly webGLBinder: WebGLBinder;

  private camera: Camera;

  public constructor(
    canvas: HTMLCanvasElement,
    gl: WebGLRenderingContext,
    projectionMatrix: mat4,
    webGLBinder: WebGLBinder
  ) {
    this.canvas = canvas;
    this.gl = gl;

    this.projectionMatrix = projectionMatrix;
    this.webGLBinder = webGLBinder;
  }

  public init() {
    const { gl, canvas } = this;

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
    this.clearCanvas();

    this.webGLBinder.bindProjectionMatrix(this.projectionMatrix);
  }

  public refreshCamera() {
    this.camera.update();
    this.webGLBinder.bindViewMatrix(this.camera.viewMatrix);
    this.webGLBinder.bindViewerPosition(this.camera.position);
  }

  public setActiveCamera(camera: Camera) {
    this.camera = camera;
  }

  public clearCanvas() {
    const gl = this.gl;

    // tslint:disable-next-line:no-bitwise
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }

  public drawModel(model: Model) {
    model.draw(this.gl, this.webGLBinder);
  }
}
