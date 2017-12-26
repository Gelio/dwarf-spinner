#define PHONG_ILLUMINATION_TYPE 0
#define BLINN_ILLUMINATION_TYPE 1

#define BLINN_SHININESS_RATIO 0.5

// Illumination model uniforms
uniform int uIlluminationModelType;

uniform float uSpecularShininess;
uniform float uDiffuseCoefficient;
uniform float uSpecularCoefficient;


// Light color and position uniforms
uniform vec3 uAmbientLightColor;

uniform vec3 uPointLightPosition;
uniform vec3 uPointLightColor;

uniform vec3 uSpotlightPosition;
uniform vec3 uSpotlightDirection;
uniform vec3 uSpotlightColor;
uniform float uSpotlightCutoff;

// Other uniforms
uniform vec3 uViewerPosition;


vec3 getDiffuseLightIntensity(vec3 lightVector, vec3 normalVector, vec3 lightIntensity);
vec3 getSpecularLightIntensity(vec3 lightVector, vec3 normalVector, vec3 viewerVector, vec3 lightIntensity);

vec4 getLightIntensityInWorldPoint(vec3 normalVector, vec3 worldPosition3D) {
  vec3 lightIntensity = uAmbientLightColor;

  vec3 viewerVector = normalize(uViewerPosition - worldPosition3D);

  vec3 pointLightVector = normalize(uPointLightPosition - worldPosition3D);

  lightIntensity += getDiffuseLightIntensity(
    pointLightVector,
    normalVector,
    uPointLightColor
  );
  lightIntensity += getSpecularLightIntensity(
    pointLightVector,
    normalVector,
    viewerVector,
    uPointLightColor
  );

  vec3 spotlightVector = normalize(uSpotlightPosition - worldPosition3D);
  vec3 normalizedSpotlightDirection = normalize(-uSpotlightDirection);
  if (dot(spotlightVector, normalizedSpotlightDirection) >= uSpotlightCutoff) {
    lightIntensity += getDiffuseLightIntensity(
      spotlightVector,
      normalizedSpotlightDirection,
      uSpotlightColor
    );
    lightIntensity += getSpecularLightIntensity(
      spotlightVector,
      normalVector,
      viewerVector,
      uSpotlightColor
    );
  }

  return vec4(lightIntensity, 1.0);
}



vec3 getDiffuseLightIntensity(vec3 lightVector, vec3 normalVector, vec3 lightIntensity) {
  // Should sum across all light sources
  float cosine = max(0.0, dot(normalVector, lightVector));

  return uDiffuseCoefficient * lightIntensity * cosine;
}

vec3 getSpecularLightIntensity(vec3 lightVector, vec3 normalVector, vec3 viewerVector, vec3 lightIntensity) {
  // Should sum across all light sources
  float shininess = uSpecularShininess;

  float cosine = 0.0;
  if (uIlluminationModelType == PHONG_ILLUMINATION_TYPE) {
    vec3 reflectionVector = 2.0 * dot(normalVector, lightVector) * normalVector - lightVector;
    cosine = dot(viewerVector, reflectionVector);
  } else if (uIlluminationModelType == BLINN_ILLUMINATION_TYPE)  {
    vec3 hVector = normalize(normalVector + lightVector);
    cosine = dot(normalVector, hVector);
    shininess *= BLINN_SHININESS_RATIO;
  }

  cosine = max(0.0, cosine);

  return uSpecularCoefficient * lightIntensity * pow(cosine, uSpecularShininess);
}
