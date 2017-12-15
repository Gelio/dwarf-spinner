import { BufferUsageType } from 'common/BufferUsageType';

export class WebGLBufferFacade {
  public readonly buffer: WebGLBuffer | null;
  public readonly itemSize: number;
  public readonly itemsCount: number;

  public constructor(
    gl: WebGLRenderingContext,
    data: ArrayBufferView,
    itemSize: number,
    itemsCount: number,
    usageType: BufferUsageType
  ) {
    this.itemSize = itemSize;
    this.itemsCount = itemsCount;

    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, usageType);
  }
}
