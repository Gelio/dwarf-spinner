import {
  Body,
  Box,
  Cylinder,
  HingeConstraint,
  Plane,
  PointToPointConstraint,
  Vec3,
  World
} from 'cannon';

import { configuration } from 'configuration';

import { IlluminationProperties } from 'common/IlluminationProperties';
import { TextureWrapType } from 'common/TextureWrapType';

import { ApplicationWorld } from 'models/ApplicationWorld';
import { BodilessModel } from 'models/BodilessModel';
import { InvisibleModel } from 'models/InvisibleModel';
import { PhysicalModel } from 'models/PhysicalModel';

import { Model } from 'interfaces/Model';

import { Spotlight } from 'models/lights/Spotlight';
import { ModelPrototypeLoader } from 'services/ModelPrototypeLoader';

export class WorldLoader {
  private readonly modelPrototypeLoader: ModelPrototypeLoader;

  constructor(modelPrototypeLoader: ModelPrototypeLoader) {
    this.modelPrototypeLoader = modelPrototypeLoader;
  }

  public async loadWorld(physicsWorld: World): Promise<ApplicationWorld> {
    const models: Model[] = [];

    const world = new ApplicationWorld(physicsWorld, models);

    await Promise.all([
      this.loadGround(world),
      this.loadDwarf(world),
      this.loadFidgetSpinner(world),
      this.loadFidgetSpinnerHinge(world)
    ]);

    this.setConstraints(world);

    return world;
  }

  private async loadGround(applicationWorld: ApplicationWorld) {
    const groundPrototype = await this.modelPrototypeLoader.loadModelPrototype(
      'assets/models/ground.json',
      'assets/textures/ground_dirt_1226_9352_Small.jpg'
    );
    groundPrototype.texture.enableWrapping(TextureWrapType.Repeat);

    const groundShape = new Plane();
    const groundBody = new Body({ mass: 0 });
    groundBody.addShape(groundShape);
    applicationWorld.physicsWorld.addBody(groundBody);

    const illuminationProperties = new IlluminationProperties();
    illuminationProperties.diffuseCoefficient = 1;
    illuminationProperties.specularCoefficient = 0;
    illuminationProperties.specularShininess = 1;

    const ground = new BodilessModel(groundPrototype, illuminationProperties);
    applicationWorld.models.push(ground);
  }

  private async loadDwarf(applicationWorld: ApplicationWorld) {
    const dwarfPrototype = await this.modelPrototypeLoader.loadModelPrototype(
      'assets/models/Dwarf_2_Very_Low-centered.json',
      'assets/textures/dwarf_2_1K_color.jpg'
    );

    const dwarfBody = new Body({ mass: configuration.dwarfMass, position: new Vec3(2, 2, 3.05) });
    dwarfBody.initPosition.copy(dwarfBody.position);
    dwarfBody.initQuaternion.setFromAxisAngle(new Vec3(0, 1, 0), Math.PI / 2);

    const shape = new Box(new Vec3(0.4, 0.3, 0.75));
    dwarfBody.addShape(shape);

    applicationWorld.physicsWorld.addBody(dwarfBody);

    const dwarf = new PhysicalModel(dwarfPrototype, dwarfBody);
    dwarf.spotlight = new Spotlight(
      configuration.dwarfReflectorColor,
      configuration.dwarfReflectorCutoffAngle
    );
    applicationWorld.models.push(dwarf);
    applicationWorld.dwarf = dwarf;
  }

  private async loadFidgetSpinner(applicationWorld: ApplicationWorld) {
    const fidgetSpinnerPrototype = await this.modelPrototypeLoader.loadModelPrototype(
      'assets/models/Fidget_Spinner-centered.json',
      'assets/textures/fidget_texture.png'
    );

    const radius = 1.1;
    const height = 0.05;

    const fidgetSpinnerBody = new Body({
      mass: configuration.fidgetSpinnerMass,
      position: new Vec3(2, 2, 5)
    });
    fidgetSpinnerBody.initPosition.copy(fidgetSpinnerBody.position);
    fidgetSpinnerBody.quaternion.setFromAxisAngle(new Vec3(0, 1, 0), Math.PI / 2);
    fidgetSpinnerBody.initQuaternion.copy(fidgetSpinnerBody.quaternion);

    const shape = new Cylinder(radius, radius, height, 10);
    fidgetSpinnerBody.addShape(shape);

    applicationWorld.physicsWorld.addBody(fidgetSpinnerBody);

    const fidgetSpinner = new PhysicalModel(fidgetSpinnerPrototype, fidgetSpinnerBody);
    applicationWorld.models.push(fidgetSpinner);
    applicationWorld.fidgetSpinner = fidgetSpinner;
  }

  private async loadFidgetSpinnerHinge(applicationWorld: ApplicationWorld) {
    const hingeBody = new Body({
      mass: 0,
      position: new Vec3(2, 2, 5)
    });
    applicationWorld.physicsWorld.addBody(hingeBody);

    const hinge = new InvisibleModel(hingeBody);
    applicationWorld.fidgetSpinnerHinge = hinge;

    applicationWorld.models.push(hinge);
  }

  private setConstraints(applicationWorld: ApplicationWorld) {
    const dwarfLocalPoint = new Vec3(0, 0, 0.75);
    const fidgetSpinnerLocalPoint = new Vec3(1.1, 0.3, 0);
    const constraint = new PointToPointConstraint(
      applicationWorld.dwarf.body,
      dwarfLocalPoint,
      applicationWorld.fidgetSpinner.body,
      fidgetSpinnerLocalPoint
    );
    applicationWorld.physicsWorld.addConstraint(constraint);

    applicationWorld.dwarfConstraint = constraint;

    const hingeConstraint = new HingeConstraint(
      applicationWorld.fidgetSpinner.body,
      applicationWorld.fidgetSpinnerHinge.body,
      {
        axisA: new Vec3(0, 0, 1)
      }
    );
    applicationWorld.physicsWorld.addConstraint(hingeConstraint);
  }
}
