import { mat4 } from 'gl-matrix';

import { configuration } from 'configuration';

import { IlluminationProperties } from 'common/IlluminationProperties';

import { ModelPrototype } from 'models/ModelPrototype';

import { WebGLBinder } from 'services/WebGLBinder';

export class BodilessModel {
  public readonly modelMatrix: mat4;
  public readonly illuminationProperties: IlluminationProperties;
  // TODO: lights

  protected readonly modelPrototype: ModelPrototype;

  public constructor(
    modelPrototype: ModelPrototype,
    illuminationProperties: IlluminationProperties = configuration.defaultIlluminationProperties.clone()
  ) {
    this.modelPrototype = modelPrototype;
    this.illuminationProperties = illuminationProperties;

    this.modelMatrix = mat4.clone(this.modelPrototype.modelMatrix);
  }

  public draw(gl: WebGLRenderingContext, webGLBinder: WebGLBinder) {
    this.modelPrototype.bindBuffersAndTexture(webGLBinder);
    webGLBinder.bindModelMatrix(this.modelMatrix);
    webGLBinder.bindNormalMatrix(this.modelMatrix);
    webGLBinder.bindIlluminationProperties(this.illuminationProperties);

    gl.drawElements(
      gl.TRIANGLES,
      this.modelPrototype.vertexIndexBuffer.itemsCount,
      gl.UNSIGNED_SHORT,
      0
    );
  }
}
