import { Vec3 } from 'cannon';

import { CameraType } from 'common/CameraType';
import { configuration } from 'configuration';

import { ApplicationWorld } from 'models/ApplicationWorld';
import { FollowingCamera } from 'models/cameras/FollowingCamera';
import { GeneralCamera } from 'models/cameras/GeneralCamera';
import { ObservingCamera } from 'models/cameras/ObservingCamera';

import { Camera } from 'interfaces/Camera';

import { CoordinateConverter } from 'services/CoordinateConverter';

export class CameraFactory {
  private readonly applicationWorld: ApplicationWorld;
  private readonly stationaryPosition = new Vec3(-4, -5, 2);

  constructor(applicationWorld: ApplicationWorld) {
    this.applicationWorld = applicationWorld;
  }

  public createCamera(cameraType: CameraType) {
    switch (cameraType) {
      case CameraType.Stationary:
        return this.createStationaryCamera();

      case CameraType.Observing:
        return this.createObservingCamera();

      case CameraType.Following:
        return this.createFollowingCamera();

      default:
        return this.createStationaryCamera();
    }
  }

  private createStationaryCamera(): Camera {
    const position = this.stationaryPosition.clone();
    const target = new Vec3(2, 2, 2);

    return new GeneralCamera(
      CoordinateConverter.physicsToRendering(position),
      CoordinateConverter.physicsToRendering(target)
    );
  }

  private createObservingCamera(): Camera {
    const position = this.stationaryPosition.clone();
    const dwarfBody = this.applicationWorld.dwarf.body;

    return new ObservingCamera(CoordinateConverter.physicsToRendering(position), dwarfBody);
  }

  private createFollowingCamera(): Camera {
    const position = this.stationaryPosition.clone();
    const dwarfBody = this.applicationWorld.dwarf.body;

    return new FollowingCamera(
      CoordinateConverter.physicsToRendering(position),
      dwarfBody,
      configuration.followingCameraDistance
    );
  }
}
