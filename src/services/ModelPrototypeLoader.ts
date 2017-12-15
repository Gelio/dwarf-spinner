// tslint:disable-next-line:no-require-imports
import expandVertexData = require('expand-vertex-data');

import { BufferUsageType } from 'common/BufferUsageType';
import { ModelPrototype } from 'models/ModelPrototype';
import { WebGLArrayBufferFacade } from 'models/WebGLArrayBufferFacade';
import { WebGLElementArrayBufferFacade } from 'models/WebGLElementArrayBufferFacade';
import { WebGLTextureFacade } from 'models/WebGLTextureFacade';
import { ImageLoader } from 'services/ImageLoader';

export class ModelPrototypeLoader {
  private nextTextureId = 0;
  private readonly gl: WebGLRenderingContext;
  private readonly imageLoader: ImageLoader;

  public constructor(gl: WebGLRenderingContext, imageLoader: ImageLoader) {
    this.gl = gl;
    this.imageLoader = imageLoader;
  }

  public async loadModelPrototype(modelObjUrl: string, textureImageUrl: string) {
    const [modelObjResponse, textureImage] = await Promise.all([
      fetch(modelObjUrl),
      this.imageLoader.loadImage(textureImageUrl)
    ]);
    const vertexData = await modelObjResponse.json();

    const gl = this.gl;

    const expandedVertexData = expandVertexData(vertexData, {
      facesToTriangles: true
    });

    const positionBuffer = this.createFloat32Buffer(
      gl,
      expandedVertexData.positions
    );
    const vertexNormalBuffer = this.createFloat32Buffer(
      gl,
      expandedVertexData.normals
    );
    const vertexTextureCoordsBuffer = this.createFloat32Buffer(
      gl,
      expandedVertexData.uvs,
      2
    );
    const positionIndicesBuffer = new WebGLElementArrayBufferFacade(
      gl,
      new Uint16Array(expandedVertexData.positionIndices),
      1,
      expandedVertexData.positionIndices.length,
      BufferUsageType.StaticDraw
    );

    const texture = new WebGLTextureFacade(
      gl,
      textureImage,
      this.nextTextureId
    );
    this.nextTextureId += 1;

    return new ModelPrototype(
      vertexNormalBuffer,
      vertexTextureCoordsBuffer,
      positionBuffer,
      positionIndicesBuffer,
      texture
    );
  }

  private createFloat32Buffer(gl: WebGLRenderingContext, data: number[], itemSize: number = 3) {
    return new WebGLArrayBufferFacade(
      gl,
      new Float32Array(data),
      itemSize,
      data.length / itemSize,
      BufferUsageType.StaticDraw
    );
  }
}
