export interface ApplicationWebGLUniforms {
  modelMatrix: WebGLUniformLocation;
  projectionMatrix: WebGLUniformLocation;
  textureSampler: WebGLUniformLocation;
  viewMatrix: WebGLUniformLocation;

  ambientLightColor: WebGLUniformLocation;

  pointLightPosition: WebGLUniformLocation;
  pointLightColor: WebGLUniformLocation;
}
