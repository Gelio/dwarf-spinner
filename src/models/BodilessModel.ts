import { mat4 } from 'gl-matrix';

import { ModelPrototype } from 'models/ModelPrototype';

import { WebGLBinder } from 'services/WebGLBinder';

export class BodilessModel {
  public readonly modelMatrix: mat4;
  public specularShininess: number;
  // TODO: lights

  protected readonly modelPrototype: ModelPrototype;

  public constructor(modelPrototype: ModelPrototype, specularShininess: number = 50) {
    this.modelPrototype = modelPrototype;
    this.specularShininess = specularShininess;

    this.modelMatrix = mat4.clone(this.modelPrototype.modelMatrix);
  }

  public draw(gl: WebGLRenderingContext, webGLBinder: WebGLBinder) {
    this.modelPrototype.bindBuffersAndTexture(webGLBinder);
    webGLBinder.bindModelMatrix(this.modelMatrix);
    webGLBinder.bindSpecularShininess(this.specularShininess);

    gl.drawElements(
      gl.TRIANGLES,
      this.modelPrototype.vertexIndexBuffer.itemsCount,
      gl.UNSIGNED_SHORT,
      0
    );
  }
}
