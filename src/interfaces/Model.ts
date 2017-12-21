import { WebGLBinder } from 'services/WebGLBinder';

export interface Model {
  draw(gl: WebGLRenderingContext, webGLBinder: WebGLBinder): void;
}
