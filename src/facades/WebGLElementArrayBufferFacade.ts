import { BufferUsageType } from 'common/BufferUsageType';

import { WebGLBufferFacade } from 'facades/WebGLBufferFacade';

export class WebGLElementArrayBufferFacade extends WebGLBufferFacade {
  public constructor(
    gl: WebGLRenderingContext,
    data: ArrayBufferView,
    itemSize: number,
    itemsCount: number,
    usageType: BufferUsageType
  ) {
    super(gl, itemSize, itemsCount);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, usageType);
  }

  public bindBuffer() {
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.buffer);
  }
}
