import { Body } from 'cannon';

import { ModelPrototype } from 'models/ModelPrototype';

export class Model {
  public readonly modelPrototype: ModelPrototype;
  public readonly body: Body;
  // TODO: lights
  // TODO: body

  public constructor(modelPrototype: ModelPrototype, body: Body) {
    this.modelPrototype = modelPrototype;
    this.body = body;
  }
}
