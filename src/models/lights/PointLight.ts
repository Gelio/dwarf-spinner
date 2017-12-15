import { vec3 } from 'gl-matrix';

import { PositionedLight } from 'interfaces/lights/PositionedLight';

export class PointLight implements PositionedLight {
  public position: vec3;
  public color: vec3;

  public constructor(color: vec3, position: vec3) {
    this.color = color;
    this.position = position;
  }
}
