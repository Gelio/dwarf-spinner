import { mat4, vec3 } from 'gl-matrix';

import { CameraType } from 'common/CameraType';

export interface Camera {
  cameraType: CameraType;
  position: vec3;
  targetPosition: vec3;
  viewMatrix: mat4;

  update(): void;
}
