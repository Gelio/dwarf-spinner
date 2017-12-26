import { mat4, vec3 } from 'gl-matrix';

export interface Camera {
  position: vec3;
  target: vec3;
  viewMatrix: mat4;

  update(): void;
}
