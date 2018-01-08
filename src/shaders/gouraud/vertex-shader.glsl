precision mediump float;

attribute vec3 aVertexPosition;
attribute vec3 aNormalVector;
attribute vec2 aTextureCoords;

uniform mat4 uModelMatrix;
uniform mat4 uNormalMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

varying vec4 vFinalColor;
uniform sampler2D uTextureSampler;

#pragma require('../get-light-intensity.glsl')

void main(void) {
  vec4 worldPosition4D = uModelMatrix * vec4(aVertexPosition, 1.0);
  vec3 worldPosition3D = vec3(worldPosition4D) / worldPosition4D.w;

  gl_Position = uProjectionMatrix * uViewMatrix * worldPosition4D;

  vec3 normalVector = normalize(vec3(uNormalMatrix * vec4(aNormalVector, 0.0)));
  vec4 textureColor = texture2D(uTextureSampler, aTextureCoords);
  vFinalColor = getColorInWorldPoint(normalVector, worldPosition3D, textureColor);
}
