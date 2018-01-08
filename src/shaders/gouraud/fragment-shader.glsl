precision mediump float;

uniform sampler2D uTextureSampler;

varying vec2 vTextureCoords;
varying vec4 vLightIntensity;

void main(void) {
  gl_FragColor = vLightIntensity;
}
