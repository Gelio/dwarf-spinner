import { BaseEvent } from 'events/BaseEvent';

import { IlluminationModelType } from 'common/IlluminationModelType';

export class NewIlluminationModelTypeEvent extends BaseEvent {
  public readonly illuminationModelType: IlluminationModelType;

  constructor(illuminationModelType: IlluminationModelType) {
    super();

    this.illuminationModelType = illuminationModelType;
  }
}
