import { Vec3 } from 'cannon';
import { vec3 } from 'gl-matrix';

import { IlluminationModelType } from 'common/IlluminationModelType';
import { IlluminationProperties } from 'common/IlluminationProperties';
import { ShadingModelType } from 'common/ShadingModelType';

import { CoordinateConverter } from 'services/CoordinateConverter';

const defaultIlluminationProperties = new IlluminationProperties();
defaultIlluminationProperties.diffuseCoefficient = 0.8;
defaultIlluminationProperties.specularCoefficient = 0.5;
defaultIlluminationProperties.specularShininess = 50;

export const configuration = {
  maxPhysicsWorldTimeAdvance: 1 / 30,
  physicsSpeed: 1,
  ambientLightColor: vec3.fromValues(0, 0, 0),

  pointLightColor: vec3.fromValues(1, 1, 1),
  pointLightPosition: CoordinateConverter.physicsToRendering(new Vec3(0, 0, 5)),

  defaultIlluminationModelType: IlluminationModelType.Phong,
  defaultShadingModelType: ShadingModelType.Phong,
  defaultIlluminationProperties,

  fidgetSpinnerMass: 400,
  dwarfMass: 80,

  spinnerAngularAcceleration: 6,
  hingeAngularAcceleration: 3,

  spinnerSwipeAccelerationMultiplier: 2
};
