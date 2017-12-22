import {
  Body,
  Box,
  Cylinder,
  DistanceConstraint,
  // LockConstraint,
  // HingeConstraint,
  Plane,
  PointToPointConstraint,
  Vec3,
  World
} from 'cannon';

import { IlluminationProperties } from 'common/IlluminationProperties';
import { TextureWrapType } from 'common/TextureWrapType';

import { ApplicationWorld } from 'models/ApplicationWorld';
import { BodilessModel } from 'models/BodilessModel';
import { PhysicalModel } from 'models/PhysicalModel';

import { Model } from 'interfaces/Model';

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
      this.loadFidgetSpinner(world)
    ]);

    const dwarfLocalPoint = new Vec3(0, 0, 0.75);
    const fidgetSpinnerLocalPoint = new Vec3(1.2, 0, 0);
    const constraint = new PointToPointConstraint(
      world.dwarf.body,
      dwarfLocalPoint,
      world.fidgetSpinner.body,
      fidgetSpinnerLocalPoint
    );
    world.physicsWorld.addConstraint(constraint);

    setTimeout(() => {
      world.physicsWorld.removeConstraint(constraint);
    }, 3000);

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

    const dwarfBody = new Body({ mass: 70, position: new Vec3(2, 2, 3.05) });
    const shape = new Box(new Vec3(0.4, 0.3, 0.75));
    dwarfBody.addShape(shape);
    applicationWorld.physicsWorld.addBody(dwarfBody);

    dwarfBody.quaternion.setFromAxisAngle(new Vec3(0, 1, 0), Math.PI / 2);

    const dwarf = new PhysicalModel(dwarfPrototype, dwarfBody);
    applicationWorld.models.push(dwarf);
    applicationWorld.dwarf = dwarf;
  }

  private async loadFidgetSpinner(applicationWorld: ApplicationWorld) {
    const fidgetSpinnerPrototype = await this.modelPrototypeLoader.loadModelPrototype(
      'assets/models/Fidget_Spinner-centered.json',
      'assets/textures/fidget_texture.png'
    );

    const radius = 1.2;
    const height = 0.05;

    const constantBody = new Body({
      mass: 0,
      position: new Vec3(2, 2, 5.01)
    });
    applicationWorld.physicsWorld.addBody(constantBody);

    const fidgetSpinnerBody = new Body({
      mass: 400,
      position: new Vec3(2, 2, 5)
    });
    const shape = new Cylinder(radius, radius, height, 10);
    fidgetSpinnerBody.addShape(shape);
    applicationWorld.physicsWorld.addBody(fidgetSpinnerBody);

    fidgetSpinnerBody.angularDamping = 0;
    fidgetSpinnerBody.angularVelocity.z = 5;

    fidgetSpinnerBody.quaternion.setFromAxisAngle(new Vec3(1, 0, 0), Math.PI / 2);

    setInterval(() => {
      fidgetSpinnerBody.angularVelocity.z += 5;
    }, 500);

    const constraint = new DistanceConstraint(
      fidgetSpinnerBody,
      constantBody,
      1
    );
    applicationWorld.physicsWorld.addConstraint(constraint);

    const fidgetSpinner = new PhysicalModel(
      fidgetSpinnerPrototype,
      fidgetSpinnerBody
    );
    applicationWorld.models.push(fidgetSpinner);
    applicationWorld.fidgetSpinner = fidgetSpinner;
  }
}
