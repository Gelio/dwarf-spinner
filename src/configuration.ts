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
  ambientLightColor: vec3.fromValues(0.25, 0.25, 0.25),

  pointLightColor: vec3.fromValues(0.5, 0.5, 1),
  pointLightPosition: CoordinateConverter.physicsToRendering(new Vec3(-1, 2, 4)),

  dwarfReflectorColor: vec3.fromValues(1, 201 / 255, 14 / 255),
  dwarfReflectorCutoffAngle: 15 / 180 * Math.PI,

  defaultIlluminationModelType: IlluminationModelType.Phong,
  defaultShadingModelType: ShadingModelType.Phong,
  defaultIlluminationProperties,

  fidgetSpinnerMass: 400,
  dwarfMass: 40,

  spinnerAngularAcceleration: 6,
  hingeAngularAcceleration: 1,
  hingeAngleRange: {
    min: -25 / 180 * Math.PI,
    max: 25 / 180 * Math.PI
  },

  spinnerSwipeAccelerationMultiplier: 2,
  spinnerPanRotationMultiplier: 0.05,

  dwarfReflectorPanRotationMultiplier: 0.1,
  dwarfReflectorAngularAcceleration: 2.5,
  dwarfReflectorMaxAngle: 45 / 180 * Math.PI,

  dwarfRotationThrottleMultiplier: 0.7,

  scoreUpdateInterval: 500,
  scoreDifferenceThreshold: 0.5,

  followingCameraSpeed: 0.04,
  followingCameraDistance: 7,

  randomShapesCount: 40
};
