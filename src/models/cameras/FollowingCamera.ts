import { Body } from 'cannon';
import { vec3 } from 'gl-matrix';

import { configuration } from 'configuration';

import { CameraType } from 'common/CameraType';
import { ObservingCamera } from 'models/cameras/ObservingCamera';

export class FollowingCamera extends ObservingCamera {
  public get cameraType() {
    return CameraType.Following;
  }

  private readonly targetVector = vec3.create();
  private readonly distanceFromTarget: number;

  constructor(position: vec3, targetBody: Body, distanceFromTarget: number) {
    super(position, targetBody);

    this.distanceFromTarget = distanceFromTarget;
  }

  public update() {
    this.updateTargetPosition();
    this.updateCameraPosition();

    this.updateViewMatrix();
  }

  private updateCameraPosition() {
    vec3.sub(this.targetVector, this.targetPosition, this.position);
    const targetDistance = vec3.length(this.targetVector);

    const totalDistanceToMove = targetDistance - this.distanceFromTarget;
    const distanceToMoveCurrentTick = totalDistanceToMove * configuration.followingCameraSpeed;

    vec3.scale(this.targetVector, this.targetVector, distanceToMoveCurrentTick / targetDistance);
    vec3.add(this.position, this.position, this.targetVector);
  }
}
