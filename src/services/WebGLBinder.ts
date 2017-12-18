import { mat4 } from 'gl-matrix';
import { ApplicationWebGLAttributes } from 'interfaces/ApplicationWebGLAttributes';
import { ApplicationWebGLUniforms } from 'interfaces/ApplicationWebGLUniforms';

import { WebGLArrayBufferFacade } from 'facades/WebGLArrayBufferFacade';
import { WebGLElementArrayBufferFacade } from 'facades/WebGLElementArrayBufferFacade';
import { WebGLTextureFacade } from 'facades/WebGLTextureFacade';

export class WebGLBinder {
  private readonly gl: WebGLRenderingContext;
  private readonly uniforms: ApplicationWebGLUniforms;
  private readonly attributes: ApplicationWebGLAttributes;

  public constructor(gl: WebGLRenderingContext, uniforms: ApplicationWebGLUniforms, attributes: ApplicationWebGLAttributes) {
    this.gl = gl;
    this.uniforms = uniforms;
    this.attributes = attributes;
  }

  public bindTexture(texture: WebGLTextureFacade) {
    texture.activate(this.uniforms.textureSampler);
  }

  public bindVertexNormalBuffer(_vertexNormalBuffer: WebGLArrayBufferFacade) {
    // TODO: add attribute for vertex normals
  }

  public bindTextureCoordsBuffer(textureCoordsBuffer: WebGLArrayBufferFacade) {
    textureCoordsBuffer.bindBuffer(this.attributes.textureCoords);
  }

  public bindVertexPositionBuffer(positionBuffer: WebGLArrayBufferFacade) {
    positionBuffer.bindBuffer(this.attributes.vertexPosition);
  }

  public bindVertexIndexBuffer(vertexIndexBuffer: WebGLElementArrayBufferFacade) {
    vertexIndexBuffer.bindBuffer();
  }

  public bindModelMatrix(modelMatrix: mat4) {
    this.gl.uniformMatrix4fv(this.uniforms.modelMatrix, false, modelMatrix);
  }

  public bindViewMatrix(viewMatrix: mat4) {
    this.gl.uniformMatrix4fv(this.uniforms.viewMatrix, false, viewMatrix);
  }

  public bindProjectionMatrix(projectionMatrix: mat4) {
    this.gl.uniformMatrix4fv(this.uniforms.projectionMatrix, false, projectionMatrix);
  }
}
