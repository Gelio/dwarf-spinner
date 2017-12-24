import { Body } from 'cannon';

import { resetBody } from 'common/resetBody';

import { Model } from 'interfaces/Model';

export class InvisibleModel implements Model {
  public readonly body: Body;

  constructor(body: Body) {
    this.body = body;
  }

  public draw() {
    // Noop
  }

  public reset() {
    resetBody(this.body);
  }
}
