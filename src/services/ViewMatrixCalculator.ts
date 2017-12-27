import { mat4, vec3, glMatrix } from 'gl-matrix';

export class ViewMatrixCalculator {
  private readonly xAxis = vec3.create();
  private readonly yAxis = vec3.create();
  private readonly zAxis = vec3.create();

  /**
   * This method does not invert the matrix.
   *
   * @see https://www.3dgep.com/understanding-the-view-matrix/#Look_At_Camera
   *
   * @param outMatrix
   * @param cameraPosition
   * @param cameraTarget
   * @param upVector Unit vector
   */
  public lookAt(outMatrix: mat4, cameraPosition: vec3, cameraTarget: vec3, upVector: vec3) {
    if (this.vectorsInTheSamePosition(cameraPosition, cameraTarget)) {
      mat4.identity(outMatrix);

      return;
    }

    const { xAxis, yAxis, zAxis } = this;

    vec3.sub(zAxis, cameraPosition, cameraTarget);
    vec3.normalize(zAxis, zAxis);

    vec3.cross(xAxis, upVector, zAxis);
    vec3.normalize(xAxis, xAxis);

    vec3.cross(yAxis, zAxis, xAxis);

    outMatrix[0] = xAxis[0];
    outMatrix[4] = xAxis[1];
    outMatrix[8] = xAxis[2];
    outMatrix[12] = -vec3.dot(xAxis, cameraPosition);

    outMatrix[1] = yAxis[0];
    outMatrix[5] = yAxis[1];
    outMatrix[9] = yAxis[2];
    outMatrix[13] = -vec3.dot(yAxis, cameraPosition);

    outMatrix[2] = zAxis[0];
    outMatrix[6] = zAxis[1];
    outMatrix[10] = zAxis[2];
    outMatrix[14] = -vec3.dot(zAxis, cameraPosition);

    outMatrix[3] = 0;
    outMatrix[7] = 0;
    outMatrix[11] = 0;
    outMatrix[15] = 1;
  }

  private vectorsInTheSamePosition(v1: vec3, v2: vec3) {
    return (
      Math.abs(v1[0] - v2[0]) <= glMatrix.EPSILON &&
      Math.abs(v1[1] - v2[1]) <= glMatrix.EPSILON &&
      Math.abs(v1[2] - v2[2]) <= glMatrix.EPSILON
    );
  }
}
