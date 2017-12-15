import { BufferUsageType } from 'common/BufferUsageType';

export class WebGLBufferFacade {
  public readonly buffer: WebGLBuffer | null;
  public readonly itemSize: number;
  public readonly itemsCount: number;

  private readonly gl: WebGLRenderingContext;

  public constructor(
    gl: WebGLRenderingContext,
    data: ArrayBufferView,
    itemSize: number,
    itemsCount: number,
    usageType: BufferUsageType
  ) {
    this.gl = gl;

    this.itemSize = itemSize;
    this.itemsCount = itemsCount;

    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, usageType);
  }

  public bindArrayBufferToAttribute(attribute: number) {
    const gl = this.gl;

    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.vertexAttribPointer(attribute, this.itemSize, gl.FLOAT, false, 0, 0);
  }

  public bindElementArrayBuffer() {
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.buffer);
  }
}
