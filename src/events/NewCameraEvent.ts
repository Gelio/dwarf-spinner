import { BaseEvent } from 'events/BaseEvent';
import { Camera } from 'interfaces/Camera';

export class NewCameraEvent extends BaseEvent {
  public readonly camera: Camera;

  constructor(camera: Camera) {
    super();

    this.camera = camera;
  }
}
