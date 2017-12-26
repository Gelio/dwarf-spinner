#define PHONG_ILLUMINATION_TYPE 0
#define BLINN_ILLUMINATION_TYPE 1

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
