import { Component as HyperComponent } from 'hyperhtml/esm';

import { IlluminationModelType } from 'common/IlluminationModelType';

import { configuration } from 'configuration';

import { ApplicationEventEmitter } from 'events/ApplicationEventEmitter';
import { NewIlluminationModelTypeEvent } from 'events/NewIlluminationModelTypeEvent';

import { SelectComponent } from 'ui/SelectComponent';
import { ShadingModelTypeSelectComponent } from 'ui/ShadingModelTypeSelectComponent';

interface ApplicationComponentState {
  illuminationModelType: IlluminationModelType;
}

export class ApplicationComponent extends HyperComponent<ApplicationComponentState> {
  private readonly eventEmitter: ApplicationEventEmitter;
  private readonly shadingModelTypeSelectComponent: ShadingModelTypeSelectComponent;

  constructor(eventEmitter: ApplicationEventEmitter) {
    super();

    this.eventEmitter = eventEmitter;
    this.onIlluminationModelTypeChange = this.onIlluminationModelTypeChange.bind(this);
    this.shadingModelTypeSelectComponent = new ShadingModelTypeSelectComponent(this.eventEmitter);
  }

  public get defaultState(): ApplicationComponentState {
    return {
      illuminationModelType: configuration.defaultIlluminationModelType
    };
  }

  public render() {
    const { illuminationModelType } = this.state;

    return this.html`
      <div>
        Illumination model type:
        ${SelectComponent(
          [
            {
              label: "Blinn's",
              value: IlluminationModelType.Blinn
            },
            {
              label: "Phong's",
              value: IlluminationModelType.Phong
            }
          ],
          illuminationModelType,
          this.onIlluminationModelTypeChange
        )}
      </div>
      ${this.shadingModelTypeSelectComponent}
    `;
  }

  private onIlluminationModelTypeChange(illuminationModelType: IlluminationModelType) {
    this.setState({
      illuminationModelType
    });

    this.eventEmitter.emitAppEvent(new NewIlluminationModelTypeEvent(illuminationModelType));
  }
}
