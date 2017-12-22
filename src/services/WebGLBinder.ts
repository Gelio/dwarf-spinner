import { mat4, vec3 } from 'gl-matrix';

import { IlluminationModelType } from 'common/IlluminationModelType';

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

  public bindVertexNormalBuffer(vertexNormalBuffer: WebGLArrayBufferFacade) {
    vertexNormalBuffer.bindBuffer(this.attributes.normalVector);
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

  public bindNormalMatrix(normalMatrix: mat4) {
    this.gl.uniformMatrix4fv(this.uniforms.normalMatrix, false, normalMatrix);
  }

  public bindViewMatrix(viewMatrix: mat4) {
    this.gl.uniformMatrix4fv(this.uniforms.viewMatrix, false, viewMatrix);
  }

  public bindProjectionMatrix(projectionMatrix: mat4) {
    this.gl.uniformMatrix4fv(this.uniforms.projectionMatrix, false, projectionMatrix);
  }

  public bindAmbientLightColor(ambientLightColor: vec3) {
    this.gl.uniform3fv(this.uniforms.ambientLightColor, ambientLightColor);
  }

  public bindPointLight(position: vec3, color: vec3) {
    this.gl.uniform3fv(this.uniforms.pointLightPosition, position);
    this.gl.uniform3fv(this.uniforms.pointLightColor, color);
  }

  public bindIlluminationModelType(illuminationModelType: IlluminationModelType) {
    this.gl.uniform1i(this.uniforms.illuminationModelType, illuminationModelType);
  }

  public bindDiffuseCoefficient(diffuseCoefficient: number) {
    this.gl.uniform1f(this.uniforms.diffuseCoefficient, diffuseCoefficient);
  }

  public bindSpecularCoefficient(specularCoefficient: number) {
    this.gl.uniform1f(this.uniforms.specularCoefficient, specularCoefficient);
  }

  public bindSpecularShininess(specularShininess: number) {
    this.gl.uniform1f(this.uniforms.specularShininess, specularShininess);
  }

  public bindViewerPosition(viewerPosition: vec3) {
    this.gl.uniform3fv(this.uniforms.viewerPosition, viewerPosition);
  }
}
