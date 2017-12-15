export class WebGLProgramFacade {
  public readonly program: WebGLProgram | null;

  private readonly gl: WebGLRenderingContext;

  public constructor(
    gl: WebGLRenderingContext,
    vertexShader: WebGLShader,
    fragmentShader: WebGLShader
  ) {
    this.gl = gl;

    this.program = gl.createProgram();
    gl.attachShader(this.program, vertexShader);
    gl.attachShader(this.program, fragmentShader);
    gl.linkProgram(this.program);

    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      throw new Error('Cannot initialize WebGL program (linking failed)');
    }
  }

  public use() {
    this.gl.useProgram(this.program);
  }
}
