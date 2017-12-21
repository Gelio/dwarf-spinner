import { mat4 } from 'gl-matrix';

import { ModelPrototype } from 'models/ModelPrototype';

import { WebGLBinder } from 'services/WebGLBinder';

export class BodilessModel {
  public readonly modelMatrix: mat4;
  // TODO: lights

  protected readonly modelPrototype: ModelPrototype;

  public constructor(modelPrototype: ModelPrototype) {
    this.modelPrototype = modelPrototype;

    this.modelMatrix = mat4.clone(this.modelPrototype.modelMatrix);
  }

  public draw(gl: WebGLRenderingContext, webGLBinder: WebGLBinder) {
    this.modelPrototype.bindBuffersAndTexture(webGLBinder);
    webGLBinder.bindModelMatrix(this.modelMatrix);

    gl.drawElements(
      gl.TRIANGLES,
      this.modelPrototype.vertexIndexBuffer.itemsCount,
      gl.UNSIGNED_SHORT,
      0
    );
  }
}
