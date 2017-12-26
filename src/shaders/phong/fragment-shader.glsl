precision mediump float;

uniform sampler2D uTextureSampler;

uniform vec3 uAmbientLightColor;

uniform vec3 uPointLightPosition;
uniform vec3 uPointLightColor;

uniform vec3 uViewerPosition;

uniform float uDiffuseCoefficient;
uniform float uSpecularCoefficient;
uniform int uIlluminationModelType;
uniform float uSpecularShininess;

varying vec3 vPosition;
varying vec3 vNormalVector;
varying vec2 vTextureCoords;

#pragma require('../get-light-intensity.glsl')

void main(void) {
  vec3 normalVector = normalize(vNormalVector);
  vec3 lightVector = normalize(uPointLightPosition - vPosition);
  vec3 viewerVector = normalize(uViewerPosition - vPosition);

  vec3 diffuseIntensity = getDiffuseLightIntensity(lightVector, normalVector);
  vec3 specularIntensity = getSpecularLightIntensity(lightVector, normalVector, viewerVector);

  vec4 lightIntensity = vec4(uAmbientLightColor + diffuseIntensity + specularIntensity, 1.0);

  gl_FragColor = lightIntensity * texture2D(uTextureSampler, vTextureCoords);
}
