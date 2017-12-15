export class WebGLTextureFacade {
  public readonly texture: WebGLTexture | null;
  public readonly id: number;

  private readonly gl: WebGLRenderingContext;
  private readonly textureNumber: number;

  /**
   * @param gl
   * @param image
   * @param id Texture number (starting from 0)
   */
  public constructor(gl: WebGLRenderingContext, image: HTMLImageElement, id: number) {
    this.gl = gl;
    this.id = id;
    this.textureNumber = gl.TEXTURE0 + this.id;

    this.texture = gl.createTexture();

    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
    gl.generateMipmap(gl.TEXTURE_2D);

    gl.bindTexture(gl.TEXTURE_2D, null);
  }

  public activate(uniformLocation: WebGLUniformLocation | null) {
    const gl = this.gl;

    gl.activeTexture(this.textureNumber);
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.uniform1i(uniformLocation, this.id);
  }
}
