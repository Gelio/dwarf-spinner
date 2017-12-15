import { WebGLArrayBufferFacade } from 'models/WebGLArrayBufferFacade';
import { WebGLElementArrayBufferFacade } from 'models/WebGLElementArrayBufferFacade';
import { WebGLTextureFacade } from 'models/WebGLTextureFacade';

export class ModelPrototype {
  public vertexNormalBuffer: WebGLArrayBufferFacade;
  public vertexTextureCoordsBuffer: WebGLArrayBufferFacade;
  public vertexPositionBuffer: WebGLArrayBufferFacade;
  public vertexIndexBuffer: WebGLElementArrayBufferFacade;

  public texture: WebGLTextureFacade;

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
  }
}
