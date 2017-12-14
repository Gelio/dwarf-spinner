import 'index.scss';
import 'normalize.css';

window.onload = bootstrap;

function bootstrap() {
  const mainCanvas = document.getElementById('main-canvas');

  if (!mainCanvas) {
    throw new Error('Main canvas not found');
  }
}
