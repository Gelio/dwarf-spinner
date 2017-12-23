import { Component as HyperComponent } from 'hyperhtml/esm';

import { IlluminationModelType } from 'common/IlluminationModelType';

import { configuration } from 'configuration';

import { ApplicationEventEmitter } from 'events/ApplicationEventEmitter';
import { NewIlluminationModelTypeEvent } from 'events/NewIlluminationModelTypeEvent';

import { SelectComponent } from 'ui/SelectComponent';

interface ApplicationComponentState {
  illuminationModelType: IlluminationModelType;
}

export class ApplicationComponent extends HyperComponent<ApplicationComponentState> {
  private readonly eventEmitter: ApplicationEventEmitter;

  constructor(eventEmitter: ApplicationEventEmitter) {
    super();

    this.eventEmitter = eventEmitter;
    this.onIlluminationModelTypeChange = this.onIlluminationModelTypeChange.bind(this);
  }

  public defaultState(): ApplicationComponentState {
    return {
      illuminationModelType: configuration.defaultIlluminationModelType
    };
  }

  public render() {
    const { illuminationModelType } = this.state;

    return this.html`
      ${SelectComponent([
        {
          label: "Blinn's",
          value: IlluminationModelType.Blinn
        },
        {
          label: "Phong's",
          value: IlluminationModelType.Phong
        }
      ], illuminationModelType, this.onIlluminationModelTypeChange)}
    `;
  }

  private onIlluminationModelTypeChange(illuminationModelType: IlluminationModelType) {
    this.setState({
      illuminationModelType
    });

    this.eventEmitter.emitAppEvent(new NewIlluminationModelTypeEvent(illuminationModelType));
  }
}
