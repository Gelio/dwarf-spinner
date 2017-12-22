import { WebGLProgramFacade } from 'facades/WebGLProgramFacade';

import { ApplicationWebGLUniforms } from 'interfaces/ApplicationWebGLUniforms';

export class WebGLUniformLoader {
  private readonly gl: WebGLRenderingContext;
  private readonly programFacade: WebGLProgramFacade;

  constructor(gl: WebGLRenderingContext, programFacade: WebGLProgramFacade) {
    this.gl = gl;
    this.programFacade = programFacade;
  }

  public loadUniforms(): ApplicationWebGLUniforms {
    return {
      modelMatrix: this.loadUniform('uModelMatrix'),
      normalMatrix: this.loadUniform('uNormalMatrix'),
      viewMatrix: this.loadUniform('uViewMatrix'),
      projectionMatrix: this.loadUniform('uProjectionMatrix'),
      textureSampler: this.loadUniform('uTextureSampler'),
      ambientLightColor: this.loadUniform('uAmbientLightColor'),
      pointLightColor: this.loadUniform('uPointLightColor'),
      pointLightPosition: this.loadUniform('uPointLightPosition'),
      diffuseCoefficient: this.loadUniform('uDiffuseCoefficient'),
      illuminationModelType: this.loadUniform('uIlluminationModelType'),
      specularCoefficient: this.loadUniform('uSpecularCoefficient'),
      specularShininess: this.loadUniform('uSpecularShininess'),
      viewerPosition: this.loadUniform('uViewerPosition')
    };
  }

  private loadUniform(name: string): WebGLUniformLocation {
    return <WebGLUniformLocation>this.gl.getUniformLocation(this.programFacade.program, name);
  }
}
