#define PHONG_ILLUMINATION_TYPE 0
#define BLINN_ILLUMINATION_TYPE 1

#define BLINN_SHININESS_RATIO 0.5

// Dimming light with distance
// IL = IL0 / (c1 d^2 + c2 d + c3)
const float c1 = 0.1;
const float c2 = -0.05;
const float c3 = 0.0;


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
float getLightDistanceDimmingFactor(vec3 distanceVector);

vec4 getLightIntensityInWorldPoint(vec3 normalVector, vec3 worldPosition3D) {
  vec3 lightIntensity = uAmbientLightColor;

  vec3 viewerVector = normalize(uViewerPosition - worldPosition3D);

  vec3 pointLightVectorUnnormalized = uPointLightPosition - worldPosition3D;
  vec3 pointLightVector = normalize(pointLightVectorUnnormalized);

  vec3 pointLightIntensity = getDiffuseLightIntensity(
    pointLightVector,
    normalVector,
    uPointLightColor
  );
  pointLightIntensity += getSpecularLightIntensity(
    pointLightVector,
    normalVector,
    viewerVector,
    uPointLightColor
  );
  pointLightIntensity *= getLightDistanceDimmingFactor(pointLightVectorUnnormalized);
  lightIntensity += pointLightIntensity;

  vec3 spotlightVectorUnnormalized = uSpotlightPosition - worldPosition3D;
  vec3 spotlightVector = normalize(spotlightVectorUnnormalized);
  vec3 normalizedReverseSpotlightDirection = normalize(-uSpotlightDirection);
  vec3 spotlightIntensity = vec3(0.0, 0.0, 0.0);
  if (dot(spotlightVector, normalizedReverseSpotlightDirection) >= uSpotlightCutoff) {
    spotlightIntensity += getDiffuseLightIntensity(
      spotlightVector,
      normalVector,
      uSpotlightColor
    );
    spotlightIntensity += getSpecularLightIntensity(
      spotlightVector,
      normalVector,
      viewerVector,
      uSpotlightColor
    );
  }
  lightIntensity += spotlightIntensity;

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

float getLightDistanceDimmingFactor(vec3 distanceVector) {
  float distance = length(distanceVector);

  // c1 * d^2 + c2 * d + c3
  return 1.0 / (c3 + distance * (c2 + c1 * distance));
}
