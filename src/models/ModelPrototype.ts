import { WebGLBufferFacade } from 'models/WebGLBufferFacade';
import { WebGLTextureFacade } from 'models/WebGLTextureFacade';

export class ModelPrototype {
  public vertexNormalBuffer: WebGLBufferFacade;
  public vertexTextureCoordsBuffer: WebGLBufferFacade;
  public vertexPositionBuffer: WebGLBufferFacade;
  public vertexIndexBuffer: WebGLBufferFacade;

  public texture: WebGLTextureFacade;

  // private readonly gl: WebGLRenderingContext;

  public constructor(
    gl: WebGLRenderingContext,
    vertexNormalBuffer: WebGLBufferFacade,
    vertexTextureCoordsBuffer: WebGLBufferFacade,
    vertexPositionBuffer: WebGLBufferFacade,
    vertexIndexBuffer: WebGLBufferFacade,
    texture: WebGLTextureFacade
  ) {
    // this.gl = gl;

    this.vertexNormalBuffer = vertexNormalBuffer;
    this.vertexTextureCoordsBuffer = vertexTextureCoordsBuffer;
    this.vertexPositionBuffer = vertexPositionBuffer;
    this.vertexIndexBuffer = vertexIndexBuffer;

    this.texture = texture;
  }
}
