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
  inAirPhysicsSpeed: 0.25,
  ambientLightColor: vec3.fromValues(0.05, 0.05, 0.05),

  pointLightColor: vec3.fromValues(1, 1, 1),
  pointLightPosition: CoordinateConverter.physicsToRendering(new Vec3(0, 0, 5)),

  dwarfReflectorColor: vec3.fromValues(1, 201 / 255, 14 / 255),
  dwarfReflectorCutoffAngle: 15 / 180 * Math.PI,

  defaultIlluminationModelType: IlluminationModelType.Phong,
  defaultShadingModelType: ShadingModelType.Phong,
  defaultIlluminationProperties,

  fidgetSpinnerMass: 400,
  dwarfMass: 80,

  spinnerAngularAcceleration: 4,
  hingeAngularAcceleration: 0.5,
  hingeAngleRange: {
    min: -20 / 180 * Math.PI,
    max: 20 / 180 * Math.PI
  },

  spinnerSwipeAccelerationMultiplier: 2,
  spinnerPanRotationMultiplier: 0.05,

  dwarfReflectorPanRotationMultiplier: 0.1,
  dwarfReflectorAngularAcceleration: 0.5,
  dwarfReflectorMaxAngle: 45 / 180 * Math.PI,

  dwarfRotationThrottleMultiplier: 0.7,

  scoreUpdateInterval: 500,
  scoreDifferenceThreshold: 0.5,

  followingCameraSpeed: 0.04,
  followingCameraDistance: 7,

  randomShapesCount: 20
};
