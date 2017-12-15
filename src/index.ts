import 'index.scss';
import 'normalize.css';
import { ModelPrototypeLoader } from 'services/ModelPrototypeLoader';

window.onload = bootstrap;

function bootstrap() {
  const mainCanvas = document.getElementById('main-canvas');

  if (!mainCanvas) {
    throw new Error('Main canvas not found');
  }

  const modelPrototypeLoader = new ModelPrototypeLoader();
  modelPrototypeLoader.loadModel('models/dwarf.json');
}
