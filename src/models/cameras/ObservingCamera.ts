import { Body } from 'cannon';
import { vec3 } from 'gl-matrix';

import { GeneralCamera } from 'models/cameras/GeneralCamera';
import { CoordinateConverter } from 'services/CoordinateConverter';

import { CameraType } from 'common/CameraType';

export class ObservingCamera extends GeneralCamera {
  public get cameraType() {
    return CameraType.Observing;
  }

  private readonly targetBody: Body;

  constructor(position: vec3, targetBody: Body) {
    super(position, vec3.create());

    this.targetBody = targetBody;
  }

  public update() {
    this.updateTargetVector();

    super.update();
  }

  private updateTargetVector() {
    CoordinateConverter.physicsToRendering(this.target, this.targetBody.position);
  }
}
