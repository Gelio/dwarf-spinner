import { mat4, vec3 } from 'gl-matrix';

export class Camera {
  public position: vec3;
  public targetDirection: vec3;

  private upVector = vec3.fromValues(0, 0, 1);
  private _viewMatrix = mat4.create();

  public constructor(position: vec3, targetDirection: vec3) {
    this.position = position;
    this.targetDirection = targetDirection;

    this.updateViewMatrix();
  }

  public get viewMatrix() {
    return this._viewMatrix;
  }

  public updateViewMatrix() {
    // TODO: stop using gl-matrix method for calculating the view matrix

    mat4.lookAt(this.viewMatrix, this.position, this.targetDirection, this.upVector);
  }
}
