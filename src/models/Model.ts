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

    const translationVector = [
      -body.position.x,
      body.position.z,
      body.position.y
    ];

    const quaternion = quat.fromValues(
      -body.quaternion.x,
      body.quaternion.z,
      body.quaternion.y,
      body.quaternion.w
    );

    mat4.fromRotationTranslation(this.modelMatrix, quaternion, translationVector);
  }
}
