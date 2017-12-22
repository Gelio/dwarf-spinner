import { Body } from 'cannon';
import { mat4, quat } from 'gl-matrix';

import { IlluminationProperties } from 'common/IlluminationProperties';

import { BodilessModel } from 'models/BodilessModel';
import { ModelPrototype } from 'models/ModelPrototype';

import { CoordinateConverter } from 'services/CoordinateConverter';
import { WebGLBinder } from 'services/WebGLBinder';

export class PhysicalModel extends BodilessModel {
  public readonly body: Body;
  // TODO: lights

  public constructor(modelPrototype: ModelPrototype, body: Body, illuminationProperties?: IlluminationProperties) {
    super(modelPrototype, illuminationProperties);
    this.body = body;
  }

  public draw(gl: WebGLRenderingContext, webGLBinder: WebGLBinder) {
    this.updateModelMatrixFromBody();
    super.draw(gl, webGLBinder);
  }

  private updateModelMatrixFromBody() {
    const { body } = this;

    const translationVector = CoordinateConverter.physicsToRendering(body.position);

    // Same coordinates swap as in CoordinateConverter.
    const quaternion = quat.fromValues(
      -body.quaternion.x,
      body.quaternion.z,
      body.quaternion.y,
      body.quaternion.w
    );

    mat4.fromRotationTranslation(this.modelMatrix, quaternion, translationVector);
    mat4.multiply(this.modelMatrix, this.modelMatrix, this.modelPrototype.modelMatrix);
  }
}
