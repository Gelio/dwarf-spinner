import { Vec3 } from 'cannon';
import { vec3 } from 'gl-matrix';

// tslint:disable-next-line:no-stateless-class
export class CoordinateConverter {
  public static renderingToPhysics(v: vec3): Vec3 {
    return new Vec3(-v[0], v[2], v[1]);
  }

  public static physicsToRendering(out: vec3, source: Vec3): void;
  public static physicsToRendering(v: Vec3): vec3;
  public static physicsToRendering(
    vOrOut: Vec3 | vec3,
    source?: Vec3
  ): vec3 | void {
    if (source) {
      const out = <vec3>vOrOut;
      out[0] = -source.x;
      out[1] = source.z;
      out[2] = source.y;
    } else {
      const v = <Vec3>vOrOut;

      return vec3.fromValues(-v.x, v.z, v.y);
    }
  }
}
