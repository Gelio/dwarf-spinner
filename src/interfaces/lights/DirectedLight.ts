import { vec3 } from 'gl-matrix';

import { Light } from 'interfaces/lights/Light';

export interface DirectedLight extends Light {
  direction: vec3;
}
