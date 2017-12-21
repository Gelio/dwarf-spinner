import { World } from 'cannon';

import { Model } from 'interfaces/Model';

import { PhysicalModel } from 'models/PhysicalModel';

export class ApplicationWorld {
  public readonly physicsWorld: World;
  public readonly models: Model[];

  public dwarf: PhysicalModel;

  public constructor(physicsWorld: World, models: Model[]) {
    this.physicsWorld = physicsWorld;
    this.models = models;
  }
}
