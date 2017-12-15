export abstract class WebGLBufferFacade {
  public readonly buffer: WebGLBuffer | null;
  public readonly itemSize: number;
  public readonly itemsCount: number;

  protected readonly gl: WebGLRenderingContext;

  public constructor(
    gl: WebGLRenderingContext,
    itemSize: number,
    itemsCount: number
  ) {
    this.gl = gl;

    this.itemSize = itemSize;
    this.itemsCount = itemsCount;

    this.buffer = gl.createBuffer();
  }
}
