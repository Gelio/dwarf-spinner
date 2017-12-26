import { Vec3 } from 'cannon';

import { ApplicationWorld } from 'models/ApplicationWorld';
import { GeneralCamera } from 'models/cameras/GeneralCamera';
import { ObservingCamera } from 'models/cameras/ObservingCamera';

import { Camera } from 'interfaces/Camera';

import { CoordinateConverter } from 'services/CoordinateConverter';

export class CameraFactory {
  private readonly applicationWorld: ApplicationWorld;
  private readonly stationaryPosition = new Vec3(-8, 0, 2);

  constructor(applicationWorld: ApplicationWorld) {
    this.applicationWorld = applicationWorld;
  }

  public createStationaryCamera(): Camera {
    const position = this.stationaryPosition.clone();
    const target = new Vec3(2, 2, 2);

    return new GeneralCamera(
      CoordinateConverter.physicsToRendering(position),
      CoordinateConverter.physicsToRendering(target)
    );
  }

  public createObservingCamera(): Camera {
    const position = this.stationaryPosition.clone();
    const dwarfBody = this.applicationWorld.dwarf.body;

    return new ObservingCamera(
      CoordinateConverter.physicsToRendering(position),
      dwarfBody
    );
  }
}
