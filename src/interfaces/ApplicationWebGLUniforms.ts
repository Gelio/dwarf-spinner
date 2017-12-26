export interface ApplicationWebGLUniforms {
  modelMatrix: WebGLUniformLocation;
  normalMatrix: WebGLUniformLocation;
  projectionMatrix: WebGLUniformLocation;
  textureSampler: WebGLUniformLocation;
  viewMatrix: WebGLUniformLocation;

  diffuseCoefficient: WebGLUniformLocation;
  specularCoefficient: WebGLUniformLocation;
  specularShininess: WebGLUniformLocation;

  illuminationModelType: WebGLUniformLocation;

  ambientLightColor: WebGLUniformLocation;

  pointLightPosition: WebGLUniformLocation;
  pointLightColor: WebGLUniformLocation;

  spotlightPosition: WebGLUniformLocation;
  spotlightDirection: WebGLUniformLocation;
  spotlightColor: WebGLUniformLocation;
  spotlightCutoff: WebGLUniformLocation;

  viewerPosition: WebGLUniformLocation;
}
