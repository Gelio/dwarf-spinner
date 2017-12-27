import { mat4, vec3 } from 'gl-matrix';
import { ViewMatrixCalculator } from 'services/ViewMatrixCalculator';

function expectSimilarMatrices(actual: mat4, expected: mat4) {
  for (let i = 0; i < 15; i += 1) {
    expect(actual[i]).toBeCloseTo(expected[i]);
  }
}

describe('ViewMatrixCalculator', () => {
  it("should work similar to mat4's lookAt method", () => {
    const cameraPosition = vec3.fromValues(-1, 4, -2);
    const targetPosition = vec3.fromValues(2, 2, 5);
    const upVector = vec3.fromValues(0, 1, 0);

    const viewMatrixCalculator = new ViewMatrixCalculator();

    const result = mat4.create();
    viewMatrixCalculator.lookAt(result, cameraPosition, targetPosition, upVector);

    const expectedResult = mat4.create();
    mat4.lookAt(expectedResult, cameraPosition, targetPosition, upVector);

    expectSimilarMatrices(result, expectedResult);
  });

  it('should return identity matrix when camera position and target are in the same position', () => {
    const cameraPosition = vec3.fromValues(-1, 4, -2);
    const targetPosition = vec3.fromValues(-1, 4, -2);
    const upVector = vec3.fromValues(0, 1, 0);

    const viewMatrixCalculator = new ViewMatrixCalculator();

    const result = mat4.create();
    viewMatrixCalculator.lookAt(result, cameraPosition, targetPosition, upVector);

    const expectedResult = mat4.identity(mat4.create());

    expectSimilarMatrices(result, expectedResult);
  });
});
