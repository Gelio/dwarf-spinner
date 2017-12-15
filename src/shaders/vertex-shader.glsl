precision mediump float;

attribute vec3 aVertexPosition;
// attribute vec3 aNormalVector;
attribute vec2 aTextureCoords;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

varying vec4 vPosition;
// varying vec3 vNormalVector;
varying vec2 vTextureCoords;

void main(void) {
  vTextureCoords = aTextureCoords;
  // vNormalVector = aNormalVector;
  // vPosition = ;
  gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);
}
