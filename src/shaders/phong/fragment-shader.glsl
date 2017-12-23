#define PHONG_ILLUMINATION_TYPE 0
#define BLINN_ILLUMINATION_TYPE 1

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


vec3 getDiffuseLightIntensity(vec3 lightVector, vec3 normalVector);
vec3 getSpecularLightIntensity(vec3 lightVector, vec3 normalVector);


void main(void) {
  vec3 normalVector = normalize(vNormalVector);
  vec3 lightVector = normalize(uPointLightPosition - vPosition);

  vec3 diffuseIntensity = getDiffuseLightIntensity(lightVector, normalVector);
  vec3 specularIntensity = getSpecularLightIntensity(lightVector, normalVector);

  vec4 lightIntensity = vec4(uAmbientLightColor + diffuseIntensity + specularIntensity, 1.0);

  gl_FragColor = lightIntensity * texture2D(uTextureSampler, vTextureCoords);
}


vec3 getDiffuseLightIntensity(vec3 lightVector, vec3 normalVector) {
  // Should sum across all light sources
  float cosine = max(0.0, dot(normalVector, lightVector));

  return uDiffuseCoefficient * uPointLightColor * cosine;
}

vec3 getSpecularLightIntensity(vec3 lightVector, vec3 normalVector) {
  // Should sum across all light sources
  vec3 viewerVector = normalize(uViewerPosition - vPosition);
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
