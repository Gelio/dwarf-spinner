import { BufferUsageType } from 'common/BufferUsageType';

import { WebGLBufferFacade } from 'models/WebGLBufferFacade';

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

  public bind() {
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.buffer);
  }
}
