import { BaseEvent } from 'events/BaseEvent';

import { ShadingModelType } from 'common/ShadingModelType';

export class NewShadingModelTypeEvent extends BaseEvent {
  public readonly shadingModelType: ShadingModelType;

  constructor(shadingModelType: ShadingModelType) {
    super();

    this.shadingModelType = shadingModelType;
  }
}
