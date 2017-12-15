import 'index.scss';
import 'normalize.css';

import { Application } from 'Application';

window.onload = bootstrap;

function bootstrap() {
  const mainCanvas = <HTMLCanvasElement>document.getElementById('main-canvas');

  if (!mainCanvas) {
    throw new Error('Main canvas not found');
  }

  const application = new Application(mainCanvas);
  application.run();
}
