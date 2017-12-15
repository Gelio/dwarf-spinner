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
      throw new Error('Cannot compile shader');
    }

    return shader;
  }
}
