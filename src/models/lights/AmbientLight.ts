import { vec3 } from 'gl-matrix';

import { Light } from 'interfaces/lights/Light';

export class AmbientLight implements Light {
  public color: vec3;

  public constructor(color: vec3) {
    this.color = color;
  }
}
