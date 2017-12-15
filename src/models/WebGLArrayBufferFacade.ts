import { BufferUsageType } from 'common/BufferUsageType';

import { WebGLBufferFacade } from 'models/WebGLBufferFacade';

export class WebGLArrayBufferFacade extends WebGLBufferFacade {
  public constructor(
    gl: WebGLRenderingContext,
    data: ArrayBufferView,
    itemSize: number,
    itemsCount: number,
    usageType: BufferUsageType
  ) {
    super(gl, itemSize, itemsCount);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, usageType);
  }

  public bind(attribute: number) {
    const gl = this.gl;

    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.vertexAttribPointer(attribute, this.itemSize, gl.FLOAT, false, 0, 0);
  }
}
