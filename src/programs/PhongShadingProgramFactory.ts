import { ProgramFactory } from 'programs/ProgramFactory';

// tslint:disable no-require-imports import-name no-var-requires
const fragmentShaderSource = require('../shaders/phong/fragment-shader.glsl');
const vertexShaderSource = require('../shaders/phong/vertex-shader.glsl');
// tslint:enable no-require-imports, import-name

export class PhongShadingProgramFactory extends ProgramFactory {
  protected get fragmentShaderSource() {
    return fragmentShaderSource;
  }

  protected get vertexShaderSource() {
    return vertexShaderSource;
  }
}
