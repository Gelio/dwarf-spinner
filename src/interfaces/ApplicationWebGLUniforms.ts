export interface ApplicationWebGLUniforms {
  modelMatrix: WebGLUniformLocation;
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

  viewerPosition: WebGLUniformLocation;
}
