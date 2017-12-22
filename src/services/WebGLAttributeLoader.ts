import { WebGLProgramFacade } from 'facades/WebGLProgramFacade';
import { ApplicationWebGLAttributes } from 'interfaces/ApplicationWebGLAttributes';

export class WebGLAttributeLoader {
  private readonly gl: WebGLRenderingContext;
  private readonly programFacade: WebGLProgramFacade;

  constructor(gl: WebGLRenderingContext, programFacade: WebGLProgramFacade) {
    this.gl = gl;
    this.programFacade = programFacade;
  }

  public loadAttributes(): ApplicationWebGLAttributes {
    return {
      vertexPosition: this.loadAndEnableAttribute('aVertexPosition'),
      textureCoords: this.loadAndEnableAttribute('aTextureCoords'),
      normalVector: this.loadAndEnableAttribute('aNormalVector')
    };
  }

  private loadAndEnableAttribute(name: string) {
    const attribute = this.gl.getAttribLocation(this.programFacade.program, name);
    this.gl.enableVertexAttribArray(attribute);

    return attribute;
  }
}
