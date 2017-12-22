import { Vec3 } from 'cannon';
import { vec3 } from 'gl-matrix';

import { IlluminationModelType } from 'common/IlluminationModelType';

import { CoordinateConverter } from 'services/CoordinateConverter';

export const configuration = {
  maxPhysicsWorldTimeAdvance: 1 / 30,
  physicsSpeed: 1,
  ambientLightColor: vec3.fromValues(0.2, 0.2, 0.2),

  pointLightColor: vec3.fromValues(1, 1, 1),
  pointLightPosition: CoordinateConverter.physicsToRendering(new Vec3(0, 0, 5)),

  diffuseCoefficient: 1,
  specularCoefficient: 0.5,
  illuminationModelType: IlluminationModelType.Phong
};
