precision mediump float;

uniform sampler2D uTextureSampler;

varying vec3 vPosition;
varying vec3 vNormalVector;
varying vec2 vTextureCoords;

#pragma require('../get-light-intensity.glsl')

void main(void) {
  vec3 normalVector = normalize(vNormalVector);
  vec4 textureColor = texture2D(uTextureSampler, vTextureCoords);
  vec4 lightIntensity = getColorInWorldPoint(normalVector, vPosition, textureColor);

  gl_FragColor = lightIntensity;
}
