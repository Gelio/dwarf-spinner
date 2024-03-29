import { mat4 } from 'gl-matrix';

import { WebGLArrayBufferFacade } from 'facades/WebGLArrayBufferFacade';
import { WebGLElementArrayBufferFacade } from 'facades/WebGLElementArrayBufferFacade';
import { WebGLTextureFacade } from 'facades/WebGLTextureFacade';
import { WebGLBinder } from 'services/WebGLBinder';

export class ModelPrototype {
  public readonly vertexNormalBuffer: WebGLArrayBufferFacade;
  public readonly vertexTextureCoordsBuffer: WebGLArrayBufferFacade;
  public readonly vertexPositionBuffer: WebGLArrayBufferFacade;
  public readonly vertexIndexBuffer: WebGLElementArrayBufferFacade;

  public readonly texture: WebGLTextureFacade;

  public readonly modelMatrix: mat4;

  public constructor(
    vertexNormalBuffer: WebGLArrayBufferFacade,
    vertexTextureCoordsBuffer: WebGLArrayBufferFacade,
    vertexPositionBuffer: WebGLArrayBufferFacade,
    vertexIndexBuffer: WebGLElementArrayBufferFacade,
    texture: WebGLTextureFacade
  ) {
    this.vertexNormalBuffer = vertexNormalBuffer;
    this.vertexTextureCoordsBuffer = vertexTextureCoordsBuffer;
    this.vertexPositionBuffer = vertexPositionBuffer;
    this.vertexIndexBuffer = vertexIndexBuffer;

    this.texture = texture;

    this.modelMatrix = mat4.identity(mat4.create());
  }

  public bindBuffersAndTexture(webGLBinder: WebGLBinder) {
    this.bindBuffers(webGLBinder);
    this.bindTexture(webGLBinder);
  }

  private bindBuffers(webGLBinder: WebGLBinder) {
    const { vertexIndexBuffer, vertexNormalBuffer, vertexPositionBuffer, vertexTextureCoordsBuffer } = this;

    webGLBinder.bindTextureCoordsBuffer(vertexTextureCoordsBuffer);
    webGLBinder.bindVertexPositionBuffer(vertexPositionBuffer);
    webGLBinder.bindVertexNormalBuffer(vertexNormalBuffer);
    webGLBinder.bindVertexIndexBuffer(vertexIndexBuffer);
  }

  private bindTexture(webGLBinder: WebGLBinder) {
    webGLBinder.bindTexture(this.texture);
  }
}
