precision mediump float;

uniform sampler2D uTextureSampler;

uniform vec3 uAmbientLightColor;

uniform vec3 uPointLightPosition;
uniform vec3 uPointLightColor;

varying vec3 vPosition;
varying vec3 vNormalVector;
varying vec2 vTextureCoords;

vec3 getColorFromPointLight() {
  vec3 lightVector = normalize(uPointLightPosition - vPosition);

  return uPointLightColor * max(0.0, dot(vNormalVector, lightVector));
}


void main(void) {
  vec4 ambientLight = vec4(uAmbientLightColor, 1.0);
  vec4 pointLightColor = vec4(getColorFromPointLight(), 1.0);

  gl_FragColor = (ambientLight + pointLightColor) * texture2D(uTextureSampler, vTextureCoords);
}
