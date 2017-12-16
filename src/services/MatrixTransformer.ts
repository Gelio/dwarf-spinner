import { mat4 } from 'gl-matrix';

export class MatrixTransformer {
  public scale(matrix: mat4, vector: number[]) {
    mat4.scale(matrix, matrix, vector);
  }

  public translate(matrix: mat4, vector: number[]) {
    mat4.translate(matrix, matrix, vector);
  }

  public rotate(matrix: mat4, radians: number, axis: number[]) {
    mat4.rotate(matrix, matrix, radians, axis);
  }

  public identity(matrix: mat4) {
    mat4.identity(matrix);
  }
}
