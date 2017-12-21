import { vec4 } from 'gl-matrix';

export const configuration = {
  maxPhysicsWorldTimeAdvance: 1 / 30,
  physicsSpeed: 1,
  ambientLightColor: vec4.fromValues(0.2, 0.2, 0.2, 1)
};
