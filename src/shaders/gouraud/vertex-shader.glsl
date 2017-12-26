precision mediump float;

attribute vec3 aVertexPosition;
attribute vec3 aNormalVector;
attribute vec2 aTextureCoords;

uniform mat4 uModelMatrix;
uniform mat4 uNormalMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform vec3 uAmbientLightColor;

uniform vec3 uPointLightPosition;
uniform vec3 uPointLightColor;

uniform vec3 uViewerPosition;

varying vec2 vTextureCoords;
varying vec4 vLightIntensity;

#pragma require('../get-light-intensity.glsl')

void main(void) {
  vTextureCoords = aTextureCoords;

  vec4 worldPosition4D = uModelMatrix * vec4(aVertexPosition, 1.0);
  vec3 worldPosition3D = vec3(worldPosition4D) / worldPosition4D.w;

  gl_Position = uProjectionMatrix * uViewMatrix * worldPosition4D;

  vec3 normalVector = normalize(vec3(uNormalMatrix * vec4(aNormalVector, 0.0)));
  vec3 lightVector = normalize(uPointLightPosition - worldPosition3D);
  vec3 viewerVector = normalize(uViewerPosition - worldPosition3D);

  vec3 diffuseIntensity = getDiffuseLightIntensity(lightVector, normalVector);
  vec3 specularIntensity = getSpecularLightIntensity(lightVector, normalVector, viewerVector);

  vLightIntensity = vec4(uAmbientLightColor + diffuseIntensity + specularIntensity, 1.0);
}
