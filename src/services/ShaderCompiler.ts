import { ShaderType } from 'common/ShaderType';

export class ShaderCompiler {
  private readonly gl: WebGLRenderingContext;

  public constructor(gl: WebGLRenderingContext) {
    this.gl = gl;
  }

  public compileShader(shaderSource: string, shaderType: ShaderType) {
    const gl = this.gl;
    const shader = gl.createShader(shaderType);

    if (!shader) {
      throw new Error('Cannot create shader');
    }

    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const compileErrorMessage = gl.getShaderInfoLog(shader);

      const error = new Error('Cannot compile shader');
      (<any>error).compileErrorMessage = compileErrorMessage;

      throw error;
    }

    return shader;
  }
}
