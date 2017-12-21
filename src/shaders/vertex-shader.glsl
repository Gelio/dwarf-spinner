precision mediump float;

attribute vec3 aVertexPosition;
attribute vec3 aNormalVector;
attribute vec2 aTextureCoords;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

varying vec3 vPosition;
varying vec3 vNormalVector;
varying vec2 vTextureCoords;

void main(void) {
  vTextureCoords = aTextureCoords;
  vNormalVector = aNormalVector;

  vec4 worldPosition = uModelMatrix * vec4(aVertexPosition, 1.0);
  vPosition = worldPosition.xyz;

  gl_Position = uProjectionMatrix * uViewMatrix * worldPosition;
}
