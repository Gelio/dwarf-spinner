import { mat4 } from 'gl-matrix';

export class ProjectionService {
  public createProjectionMatrix(
    fovy: number,
    aspectRatio: number,
    near: number,
    far: number
  ): mat4 {
    const projectionMatrix = mat4.create();
    mat4.perspective(projectionMatrix, fovy, aspectRatio, near, far);

    return projectionMatrix;
  }
}
