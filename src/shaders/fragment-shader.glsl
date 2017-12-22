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


vec3 getDiffuseLightIntensity(vec3 lightVector);
vec3 getSpecularLightIntensity(vec3 lightVector);


void main(void) {
  vec3 lightVector = normalize(uPointLightPosition - vPosition);

  vec3 diffuseIntensity = getDiffuseLightIntensity(lightVector);
  vec3 specularIntensity = getSpecularLightIntensity(lightVector);

  vec4 lightIntensity = vec4(uAmbientLightColor + diffuseIntensity + specularIntensity, 1.0);

  gl_FragColor = lightIntensity * texture2D(uTextureSampler, vTextureCoords);
}


vec3 getDiffuseLightIntensity(vec3 lightVector) {
  // Should sum across all light sources
  float cosine = max(0.0, dot(vNormalVector, lightVector));

  return uDiffuseCoefficient * uPointLightColor * cosine;
}

vec3 getSpecularLightIntensity(vec3 lightVector) {
  // Should sum across all light sources
  vec3 viewerVector = normalize(uViewerPosition - vPosition);
  vec3 reflectionVector = 2.0 * dot(vNormalVector, lightVector) * vNormalVector - lightVector;

  float cosine = max(0.0, dot(viewerVector, reflectionVector));

  return uSpecularCoefficient * uPointLightColor * pow(cosine, uSpecularShininess);
}
