import { Body, Vec3 } from 'cannon';
import { mat4, quat } from 'gl-matrix';

import { IlluminationProperties } from 'common/IlluminationProperties';
import { resetBody } from 'common/resetBody';

import { BodilessModel } from 'models/BodilessModel';
import { Spotlight } from 'models/lights/Spotlight';
import { ModelPrototype } from 'models/ModelPrototype';

import { CoordinateConverter } from 'services/CoordinateConverter';
import { WebGLBinder } from 'services/WebGLBinder';

export class PhysicalModel extends BodilessModel {
  public readonly body: Body;
  public spotlight: Spotlight | null = null;

  public constructor(
    modelPrototype: ModelPrototype,
    body: Body,
    illuminationProperties?: IlluminationProperties
  ) {
    super(modelPrototype, illuminationProperties);
    this.body = body;
  }

  public draw(gl: WebGLRenderingContext, webGLBinder: WebGLBinder) {
    this.updateModelMatrixFromBody();
    this.updateAndBindSpotlight(webGLBinder);
    super.draw(gl, webGLBinder);
  }

  public reset() {
    resetBody(this.body);
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

  private updateAndBindSpotlight(webGLBinder: WebGLBinder) {
    if (!this.spotlight) {
      return;
    }

    // TODO: set position on top of object
    CoordinateConverter.physicsToRendering(this.spotlight.position, this.body.position);
    // TODO: set direction based on object rotation
    CoordinateConverter.physicsToRendering(this.spotlight.direction, new Vec3(0, 1, -1));
    this.spotlight.bind(webGLBinder);
  }
}
