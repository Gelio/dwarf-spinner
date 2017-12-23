#define PHONG_ILLUMINATION_TYPE 0
#define BLINN_ILLUMINATION_TYPE 1

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

uniform float uDiffuseCoefficient;
uniform float uSpecularCoefficient;
uniform int uIlluminationModelType;
uniform float uSpecularShininess;

varying vec2 vTextureCoords;
varying vec4 vLightIntensity;

vec3 getDiffuseLightIntensity(vec3 lightVector, vec3 normalVector);
vec3 getSpecularLightIntensity(vec3 lightVector, vec3 normalVector, vec3 viewerVector);

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

vec3 getDiffuseLightIntensity(vec3 lightVector, vec3 normalVector) {
  // Should sum across all light sources
  float cosine = max(0.0, dot(normalVector, lightVector));

  return uDiffuseCoefficient * uPointLightColor * cosine;
}

vec3 getSpecularLightIntensity(vec3 lightVector, vec3 normalVector, vec3 viewerVector) {
  // Should sum across all light sources
  float shininess = uSpecularShininess;

  float cosine = 0.0;
  if (uIlluminationModelType == PHONG_ILLUMINATION_TYPE) {
    vec3 reflectionVector = 2.0 * dot(normalVector, lightVector) * normalVector - lightVector;
    cosine = dot(viewerVector, reflectionVector);
  } else if (uIlluminationModelType == BLINN_ILLUMINATION_TYPE)  {
    vec3 hVector = normalize(normalVector + lightVector);
    cosine = dot(normalVector, hVector);
    shininess /= 2.0;
  }

  cosine = max(0.0, cosine);

  return uSpecularCoefficient * uPointLightColor * pow(cosine, uSpecularShininess);
}
