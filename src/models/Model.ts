import { Body } from 'cannon';
import { mat4 } from 'gl-matrix';

import { ModelPrototype } from 'models/ModelPrototype';

export class Model {
  public readonly modelPrototype: ModelPrototype;
  public readonly body: Body;
  // TODO: lights
  // TODO: body

  public readonly modelMatrix: mat4;

  public constructor(modelPrototype: ModelPrototype, body: Body) {
    this.modelPrototype = modelPrototype;
    this.body = body;

    this.modelMatrix = mat4.clone(this.modelPrototype.modelMatrix);
  }
}
