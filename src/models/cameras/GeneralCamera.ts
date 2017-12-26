import { Vec3 } from 'cannon';
import { mat4, vec3 } from 'gl-matrix';

import { Camera } from 'interfaces/Camera';

import { CameraType } from 'common/CameraType';

import { CoordinateConverter } from 'services/CoordinateConverter';

export class GeneralCamera implements Camera {
  public get cameraType() {
    return CameraType.Stationary;
  }

  public position: vec3;
  public targetPosition: vec3;

  protected upVector = CoordinateConverter.physicsToRendering(new Vec3(0, 0, 1));
  private _viewMatrix = mat4.create();

  public constructor(position: vec3, targetPosition: vec3) {
    this.position = position;
    this.targetPosition = targetPosition;

    this.updateViewMatrix();
  }

  public get viewMatrix() {
    return this._viewMatrix;
  }

  public update() {
    this.updateViewMatrix();
  }

  protected updateViewMatrix() {
    // TODO: stop using gl-matrix method for calculating the view matrix

    mat4.lookAt(this.viewMatrix, this.position, this.targetPosition, this.upVector);
  }
}
