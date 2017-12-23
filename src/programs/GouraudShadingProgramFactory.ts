import { ProgramFactory } from 'programs/ProgramFactory';

// tslint:disable no-require-imports import-name no-var-requires
const fragmentShaderSource = require('../shaders/gouraud/fragment-shader.glsl');
const vertexShaderSource = require('../shaders/gouraud/vertex-shader.glsl');
// tslint:enable no-require-imports, import-name

export class GouraudShadingProgramFactory extends ProgramFactory {
  protected get fragmentShaderSource() {
    return fragmentShaderSource;
  }

  protected get vertexShaderSource() {
    return vertexShaderSource;
  }
}
