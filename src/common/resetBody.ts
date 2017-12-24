import { Body } from 'cannon';

export function resetBody(body: Body) {
  body.position.copy(body.initPosition);
  body.velocity.copy(body.initVelocity);
  body.angularVelocity.copy(body.initAngularVelocity);
  body.quaternion.copy(body.initQuaternion);
}
