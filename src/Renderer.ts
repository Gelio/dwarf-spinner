import { mat4 } from 'gl-matrix';

import { ApplicationWebGLAttributes } from 'interfaces/ApplicationWebGLAttributes';
import { ApplicationWebGLUniforms } from 'interfaces/ApplicationWebGLUniforms';

import { Camera } from 'models/Camera';
import { Model } from 'models/Model';

export class Renderer {
  private readonly canvas: HTMLCanvasElement;
  private readonly gl: WebGLRenderingContext;

  private readonly projectionMatrix: mat4;
  private readonly camera: Camera;

  private readonly attributes: ApplicationWebGLAttributes;
  private readonly uniforms: ApplicationWebGLUniforms;

  public constructor(
    canvas: HTMLCanvasElement,
    gl: WebGLRenderingContext,
    projectionMatrix: mat4,
    camera: Camera,
    attributes: ApplicationWebGLAttributes,
    uniforms: ApplicationWebGLUniforms
  ) {
    this.canvas = canvas;
    this.gl = gl;

    this.projectionMatrix = projectionMatrix;
    this.camera = camera;

    this.attributes = attributes;
    this.uniforms = uniforms;
  }

  public init() {
    const { gl, canvas } = this;

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
    this.clearCanvas();
    this.refreshCamera();

    gl.uniformMatrix4fv(
      this.uniforms.projectionMatrix,
      false,
      this.projectionMatrix
    );
  }

  public refreshCamera() {
    this.gl.uniformMatrix4fv(
      this.uniforms.viewMatrix,
      false,
      this.camera.viewMatrix
    );
  }

  public clearCanvas() {
    const gl = this.gl;

    // tslint:disable-next-line:no-bitwise
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }

  public drawModel(model: Model) {
    const { gl, uniforms, attributes } = this;
    const modelPrototype = model.modelPrototype;

    modelPrototype.texture.activate(uniforms.textureSampler);

    modelPrototype.vertexPositionBuffer.bindBuffer(attributes.vertexPosition);
    modelPrototype.vertexTextureCoordsBuffer.bindBuffer(
      attributes.textureCoords
    );

    modelPrototype.vertexIndexBuffer.bindBuffer();

    gl.uniformMatrix4fv(uniforms.modelMatrix, false, model.modelMatrix);

    gl.drawElements(
      gl.TRIANGLES,
      modelPrototype.vertexIndexBuffer.itemsCount,
      gl.UNSIGNED_SHORT,
      0
    );
  }
}
