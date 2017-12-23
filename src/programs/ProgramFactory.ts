import { ShaderType } from 'common/ShaderType';
import { WebGLProgramFacade } from 'facades/WebGLProgramFacade';
import { ShaderCompiler } from 'services/ShaderCompiler';

export abstract class ProgramFactory {
  private readonly shaderCompiler: ShaderCompiler;
  private readonly gl: WebGLRenderingContext;
  private _compiledProgram: WebGLProgramFacade | undefined;

  protected abstract get fragmentShaderSource(): string;
  protected abstract get vertexShaderSource(): string;

  constructor(shaderCompiler: ShaderCompiler, gl: WebGLRenderingContext) {
    this.shaderCompiler = shaderCompiler;
    this.gl = gl;
  }

  public compile() {
    if (this._compiledProgram) {
      return;
    }

    const vertexShader = this.shaderCompiler.compileShader(
      this.vertexShaderSource,
      ShaderType.VertexShader
    );

    const fragmentShader = this.shaderCompiler.compileShader(
      this.fragmentShaderSource,
      ShaderType.FragmentShader
    );

    this._compiledProgram = new WebGLProgramFacade(this.gl, vertexShader, fragmentShader);
  }

  public get compiledProgram(): WebGLProgramFacade {
    if (!this._compiledProgram) {
      throw new Error('The program must be compiled first.');
    }

    return this._compiledProgram;
  }
}
