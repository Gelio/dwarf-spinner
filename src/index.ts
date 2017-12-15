import 'index.scss';
import 'normalize.css';
import { ModelPrototypeLoader } from 'services/ModelPrototypeLoader';

window.onload = bootstrap;

async function bootstrap() {
  const mainCanvas = <HTMLCanvasElement>document.getElementById('main-canvas');

  if (!mainCanvas) {
    throw new Error('Main canvas not found');
  }

  const gl = mainCanvas.getContext('webgl');
  if (!gl) {
    throw new Error('WebGL not supported');
  }

  const modelPrototypeLoader = new ModelPrototypeLoader(gl);
  const modelPrototype = await modelPrototypeLoader.loadModelPrototype('models/dwarf.json');

  console.log(modelPrototype);
}
