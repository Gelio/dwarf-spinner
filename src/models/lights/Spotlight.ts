import { vec3 } from 'gl-matrix';

import { DirectedLight } from 'interfaces/lights/DirectedLight';
import { WebGLBinder } from 'services/WebGLBinder';

export class Spotlight implements DirectedLight {
  public direction: vec3 = vec3.create();
  public position: vec3 = vec3.create();
  public color: vec3;
  public cutoff: number;

  public constructor(color: vec3, cutoffAngle: number) {
    this.color = color;
    this.cutoff = Math.cos(cutoffAngle);
  }

  public bind(webGLBinder: WebGLBinder) {
    webGLBinder.bindSpotlightColor(this.color);
    webGLBinder.bindSpotlightDirection(this.direction);
    webGLBinder.bindSpotlightPosition(this.position);
    webGLBinder.bindSpotlightCutoff(this.cutoff);
  }
}
