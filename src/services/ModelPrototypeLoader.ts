// tslint:disable-next-line:no-require-imports
import expandVertexData = require('expand-vertex-data');

import { BufferUsageType } from 'common/BufferUsageType';
import { ModelPrototype } from 'models/ModelPrototype';
import { WebGLBufferFacade } from 'models/WebGLBufferFacade';
import { WebGLTextureFacade } from 'models/WebGLTextureFacade';

export class ModelPrototypeLoader {
  private nextTextureId = 0;
  private readonly gl: WebGLRenderingContext;

  public constructor(gl: WebGLRenderingContext) {
    this.gl = gl;
  }

  public async loadModelPrototype(sourceUrl: string) {
    const response = await fetch(sourceUrl);
    const vertexData = await response.json();

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
      expandedVertexData.uvs
    );
    const positionIndicesBuffer = new WebGLBufferFacade(
      gl,
      new Uint16Array(expandedVertexData.positionIndices),
      1,
      expandedVertexData.positionIndices.length,
      BufferUsageType.StaticDraw
    );

    const textureImageData = new ImageData(1, 1);
    textureImageData.data[0] = 1;
    textureImageData.data[1] = 1;
    textureImageData.data[2] = 1;
    textureImageData.data[3] = 1;
    const texture = new WebGLTextureFacade(
      gl,
      textureImageData,
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

  private createFloat32Buffer(gl: WebGLRenderingContext, data: number[]) {
    const itemSize = 3;

    return new WebGLBufferFacade(
      gl,
      new Float32Array(data),
      itemSize,
      data.length / itemSize,
      BufferUsageType.StaticDraw
    );
  }
}
