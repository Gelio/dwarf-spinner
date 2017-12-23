import { Component as HyperComponent } from 'hyperhtml/esm';

import { IlluminationModelType } from 'common/IlluminationModelType';
import { configuration } from 'configuration';
import { ApplicationEventEmitter } from 'events/ApplicationEventEmitter';
import { NewIlluminationModelTypeEvent } from 'events/NewIlluminationModelTypeEvent';
import { SelectComponent } from 'ui/SelectComponent';

interface IlluminationModelTypeSelectComponentState {
  illuminationModelType: IlluminationModelType;
}

export class IlluminationModelTypeSelectComponent extends HyperComponent<
  IlluminationModelTypeSelectComponentState
> {
  private readonly eventEmitter: ApplicationEventEmitter;

  constructor(eventEmitter: ApplicationEventEmitter) {
    super();

    this.eventEmitter = eventEmitter;
    this.onIlluminationModelTypeChange = this.onIlluminationModelTypeChange.bind(this);
  }

  public get defaultState() {
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
    `;
  }

  private onIlluminationModelTypeChange(illuminationModelType: IlluminationModelType) {
    this.setState({
      illuminationModelType
    });

    this.eventEmitter.emitAppEvent(new NewIlluminationModelTypeEvent(illuminationModelType));
  }
}
