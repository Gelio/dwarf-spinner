import { vec3 } from 'gl-matrix';

import { Light } from 'interfaces/lights/Light';

export interface PositionedLight extends Light {
  position: vec3;
}
