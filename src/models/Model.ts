import { Body } from 'cannon';
import { mat4, quat } from 'gl-matrix';

import { ModelPrototype } from 'models/ModelPrototype';

import { WebGLBinder } from 'services/WebGLBinder';

export class Model {
  public readonly modelPrototype: ModelPrototype;
  public readonly body: Body;
  // TODO: lights

  public readonly modelMatrix: mat4;

  public constructor(modelPrototype: ModelPrototype, body: Body) {
    this.modelPrototype = modelPrototype;
    this.body = body;

    this.modelMatrix = mat4.clone(this.modelPrototype.modelMatrix);
  }

  public draw(gl: WebGLRenderingContext, webGLBinder: WebGLBinder) {
    this.modelPrototype.bindBuffersAndTexture(webGLBinder);

    this.updateModelMatrixFromBody();
    webGLBinder.bindModelMatrix(this.modelMatrix);

    gl.drawElements(
      gl.TRIANGLES,
      this.modelPrototype.vertexIndexBuffer.itemsCount,
      gl.UNSIGNED_SHORT,
      0
    );
  }

  private updateModelMatrixFromBody() {
    const { body } = this;

    const quaternion = quat.fromValues(body.quaternion.x, body.quaternion.y, body.quaternion.z, body.quaternion.w);
    const quaternionMatrix = mat4.fromQuat(this.modelMatrix, quaternion);

    mat4.mul(this.modelMatrix, quaternionMatrix, this.modelPrototype.modelMatrix);

    mat4.translate(this.modelMatrix, this.modelMatrix, [
      body.position.x,
      body.position.z,
      body.position.y
    ]);
  }
}
