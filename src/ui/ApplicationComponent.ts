import { Component as HyperComponent } from 'hyperhtml/esm';

import { ApplicationEventEmitter } from 'events/ApplicationEventEmitter';

import { IlluminationModelTypeSelectComponent } from 'ui/IlluminationModelTypeSelectComponent';
import { InstructionsComponent } from 'ui/InstructionsComponent';
import { ShadingModelTypeSelectComponent } from 'ui/ShadingModelTypeSelectComponent';
import { SwitchCameraComponent } from 'ui/SwitchCameraComponent';

export class ApplicationComponent extends HyperComponent {
  private readonly eventEmitter: ApplicationEventEmitter;
  private readonly illuminationModelTypeSelect: IlluminationModelTypeSelectComponent;
  private readonly shadingModelTypeSelect: ShadingModelTypeSelectComponent;
  private readonly instructions: InstructionsComponent;
  private readonly switchCamera: HTMLElement;

  constructor(eventEmitter: ApplicationEventEmitter) {
    super();

    this.eventEmitter = eventEmitter;

    this.illuminationModelTypeSelect = new IlluminationModelTypeSelectComponent(this.eventEmitter);
    this.shadingModelTypeSelect = new ShadingModelTypeSelectComponent(this.eventEmitter);
    this.instructions = new InstructionsComponent();
    this.switchCamera = SwitchCameraComponent(this.eventEmitter);
  }

  public render() {
    return this.html`
      ${this.switchCamera}
      ${this.illuminationModelTypeSelect}
      ${this.shadingModelTypeSelect}
      ${this.instructions}
    `;
  }
}
