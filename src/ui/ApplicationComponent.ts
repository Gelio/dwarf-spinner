import { Component as HyperComponent } from 'hyperhtml/esm';

import { ApplicationEventEmitter } from 'events/ApplicationEventEmitter';

import { IlluminationModelTypeSelectComponent } from 'ui/IlluminationModelTypeSelectComponent';
import { ShadingModelTypeSelectComponent } from 'ui/ShadingModelTypeSelectComponent';

export class ApplicationComponent extends HyperComponent {
  private readonly eventEmitter: ApplicationEventEmitter;
  private readonly illuminationModelTypeSelect: IlluminationModelTypeSelectComponent;
  private readonly shadingModelTypeSelect: ShadingModelTypeSelectComponent;

  constructor(eventEmitter: ApplicationEventEmitter) {
    super();

    this.eventEmitter = eventEmitter;

    this.illuminationModelTypeSelect = new IlluminationModelTypeSelectComponent(this.eventEmitter);
    this.shadingModelTypeSelect = new ShadingModelTypeSelectComponent(this.eventEmitter);
  }

  public render() {
    return this.html`
      ${this.illuminationModelTypeSelect}
      ${this.shadingModelTypeSelect}
    `;
  }
}
