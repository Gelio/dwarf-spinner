import { vec3 } from 'gl-matrix';

import { DirectedLight } from 'interfaces/lights/DirectedLight';

export class Spotlight implements DirectedLight {
  public direction: vec3;
  public position: vec3;
  public color: vec3;

  public constructor(color: vec3, position: vec3, direction: vec3) {
    this.color = color;
    this.position = position;
    this.direction = direction;
  }
}
