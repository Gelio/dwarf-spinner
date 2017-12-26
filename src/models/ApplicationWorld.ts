import { Body, Constraint, World } from 'cannon';

import { Model } from 'interfaces/Model';

import { InvisibleModel } from 'models/InvisibleModel';
import { PhysicalModel } from 'models/PhysicalModel';

export class ApplicationWorld {
  public readonly physicsWorld: World;
  public readonly models: Model[];

  public dwarf: PhysicalModel;
  public fidgetSpinner: PhysicalModel;
  public fidgetSpinnerHinge: InvisibleModel;
  public dwarfConstraint: Constraint;
  public groundBody: Body;

  public constructor(physicsWorld: World, models: Model[]) {
    this.physicsWorld = physicsWorld;
    this.models = models;
  }
}
