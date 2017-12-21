precision mediump float;

uniform sampler2D uTextureSampler;
uniform vec4 uAmbientLightColor;

varying vec4 vPosition;
// varying vec3 vNormalVector;
varying vec2 vTextureCoords;

void main(void) {
  gl_FragColor = texture2D(uTextureSampler, vTextureCoords) * uAmbientLightColor;
}
