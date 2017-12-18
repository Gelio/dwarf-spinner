import { Vec3 } from 'cannon';
import { mat4, vec3 } from 'gl-matrix';

import { CoordinateConverter } from 'services/CoordinateConverter';

export class Camera {
  public position: vec3;
  public target: vec3;

  private upVector = CoordinateConverter.physicsToRendering(new Vec3(0, 0, 1));
  private _viewMatrix = mat4.create();

  public constructor(position: vec3, target: vec3) {
    this.position = position;
    this.target = target;

    this.updateViewMatrix();
  }

  public get viewMatrix() {
    return this._viewMatrix;
  }

  public updateViewMatrix() {
    // TODO: stop using gl-matrix method for calculating the view matrix

    mat4.lookAt(this.viewMatrix, this.position, this.target, this.upVector);
  }
}
