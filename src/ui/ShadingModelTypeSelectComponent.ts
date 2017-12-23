import { Component as HyperComponent } from 'hyperhtml/esm';

import { ShadingModelType } from 'common/ShadingModelType';
import { configuration } from 'configuration';
import { ApplicationEventEmitter } from 'events/ApplicationEventEmitter';
import { NewShadingModelTypeEvent } from 'events/NewShadingModelTypeEvent';
import { SelectComponent } from 'ui/SelectComponent';

interface ShadingModelTypeSelectComponentState {
  shadingModelType: ShadingModelType;
}

export class ShadingModelTypeSelectComponent extends HyperComponent<
  ShadingModelTypeSelectComponentState
> {
  private readonly eventEmitter: ApplicationEventEmitter;

  constructor(eventEmitter: ApplicationEventEmitter) {
    super();

    this.eventEmitter = eventEmitter;
    this.onShadingModelTypeChange = this.onShadingModelTypeChange.bind(this);
  }

  public get defaultState() {
    return {
      shadingModelType: configuration.defaultShadingModelType
    };
  }

  public render() {
    const { shadingModelType } = this.state;

    return this.html`
      <div>
        Shading model type:
        ${SelectComponent([
          {
            label: "Gouraud's",
            value: ShadingModelType.Gouraud
          },
          {
            label: "Phong's",
            value: ShadingModelType.Phong
          }
        ], shadingModelType, this.onShadingModelTypeChange)}
      </div>
    `;
  }

  private onShadingModelTypeChange(shadingModelType: ShadingModelType) {
    this.setState({
      shadingModelType
    });

    this.eventEmitter.emitAppEvent(new NewShadingModelTypeEvent(shadingModelType));
  }
}
