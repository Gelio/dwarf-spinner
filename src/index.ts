import { bind } from 'hyperhtml/esm';

import 'index.scss';
import 'normalize.css';

import { Application } from 'Application';
import { ApplicationComponent } from 'ui/ApplicationComponent';

window.onload = bootstrap;

function bootstrap() {
  const mainCanvas = <HTMLCanvasElement>document.getElementById('main-canvas');

  if (!mainCanvas) {
    throw new Error('Main canvas not found');
  }

  const application = new Application(mainCanvas);
  application.init();

  const uiContainer = document.querySelector('.ui-container');
  if (!uiContainer) {
    throw new Error('UI container not found');
  }

  const applicationComponent = new ApplicationComponent(application.eventEmitter);
  // tslint:disable-next-line:no-unused-expression
  bind(uiContainer)`${applicationComponent}`;
}
