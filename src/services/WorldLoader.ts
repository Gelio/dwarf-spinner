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
import { mat4 } from 'gl-matrix';

import { configuration } from 'configuration';

import { IlluminationProperties } from 'common/IlluminationProperties';
import { TextureWrapType } from 'common/TextureWrapType';

import { ApplicationWorld } from 'models/ApplicationWorld';
import { BodilessModel } from 'models/BodilessModel';
import { InvisibleModel } from 'models/InvisibleModel';
import { Spotlight } from 'models/lights/Spotlight';
import { PhysicalModel } from 'models/PhysicalModel';

import { Model } from 'interfaces/Model';

import { CoordinateConverter } from 'services/CoordinateConverter';
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
      this.loadFidgetSpinnerHinge(world),
      this.loadRandomShapesInAir(world)
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

    const groundSize = 100;

    const groundShape = new Plane();
    const groundBody = new Body({ mass: 0 });
    groundBody.addShape(groundShape);
    applicationWorld.groundBody = groundBody;
    applicationWorld.physicsWorld.addBody(groundBody);

    const illuminationProperties = new IlluminationProperties();
    illuminationProperties.diffuseCoefficient = 1;
    illuminationProperties.specularCoefficient = 0;
    illuminationProperties.specularShininess = 1;

    for (let x = -3; x <= 3; x += 1) {
      for (let y = -3; y <= 3; y += 1) {
        const ground = new BodilessModel(groundPrototype, illuminationProperties);

        mat4.translate(
          ground.modelMatrix,
          ground.modelMatrix,
          CoordinateConverter.physicsToRendering(new Vec3(x, y, 0).scale(groundSize))
        );

        applicationWorld.models.push(ground);
      }
    }
  }

  private async loadDwarf(applicationWorld: ApplicationWorld) {
    const dwarfPrototype = await this.modelPrototypeLoader.loadModelPrototype(
      'assets/models/Dwarf_2_Very_Low-centered.json',
      'assets/textures/dwarf_2_1K_color.jpg'
    );

    const dwarfBody = new Body({ mass: configuration.dwarfMass, position: new Vec3(2, 2, 3.05) });
    dwarfBody.initPosition.copy(dwarfBody.position);
    dwarfBody.initQuaternion.setFromAxisAngle(new Vec3(0, 1, 0), Math.PI / 2);
    dwarfBody.allowSleep = false;

    const shape = new Box(new Vec3(0.4, 0.3, 0.75));
    dwarfBody.addShape(shape);

    applicationWorld.physicsWorld.addBody(dwarfBody);

    const dwarf = new PhysicalModel(dwarfPrototype, dwarfBody);
    applicationWorld.models.push(dwarf);
    applicationWorld.dwarf = dwarf;
    this.addDwarfSpotlight(dwarf);
  }

  private addDwarfSpotlight(dwarf: PhysicalModel) {
    dwarf.spotlight = new Spotlight(
      configuration.dwarfReflectorColor,
      configuration.dwarfReflectorCutoffAngle
    );
    dwarf.spotlight.directionOffset.setFromAxisAngle(new Vec3(1, 0, 0), -60 / 180 * Math.PI);
    dwarf.updateSpotlight = updateDwarfSpotlight;
  }

  private async loadFidgetSpinner(applicationWorld: ApplicationWorld) {
    const fidgetSpinnerPrototype = await this.modelPrototypeLoader.loadModelPrototype(
      'assets/models/Fidget_Spinner-centered.json',
      'assets/textures/missile-texture.jpg'
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
    fidgetSpinnerBody.allowSleep = false;

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
    hingeBody.allowSleep = false;
    applicationWorld.physicsWorld.addBody(hingeBody);

    const hinge = new InvisibleModel(hingeBody);
    applicationWorld.fidgetSpinnerHinge = hinge;

    applicationWorld.models.push(hinge);
  }

  private async loadRandomShapesInAir(applicationWorld: ApplicationWorld) {
    const boxPrototype = await this.modelPrototypeLoader.loadModelPrototype(
      'assets/models/cube.json',
      'assets/textures/missile-texture.jpg'
    );

    const shape = new Box(new Vec3(0.5, 0.5, 0.5));

    for (let i = 0; i < configuration.randomShapesCount; i += 1) {
      const body = new Body({
        mass: 0,
        position: this.getRandomInAirPosition()
      });

      body.addShape(shape);
      applicationWorld.physicsWorld.addBody(body);

      const model = new PhysicalModel(boxPrototype, body);
      applicationWorld.models.push(model);
    }
  }

  private getRandomInAirPosition(): Vec3 {
    // tslint:disable:insecure-random
    const x = Math.random() * 5 - 2.5;
    const y = Math.random() * 50 - 5;
    const z = Math.random() * 10 + 7;
    // tslint:enable:insecure-random

    return new Vec3(x, y, z);
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

const dwarfHeadPosition = new Vec3();
const dwarfSpotlightDirection = new Vec3();
const dwarfHeadOffset = new Vec3(0, 0, 0.7);
function updateDwarfSpotlight(dwarf: PhysicalModel) {
  const { spotlight, body } = dwarf;
  if (!spotlight) {
    return;
  }

  body.quaternion.vmult(dwarfHeadOffset, dwarfHeadPosition);
  dwarfHeadPosition.vadd(body.position, dwarfHeadPosition);
  CoordinateConverter.physicsToRendering(spotlight.position, dwarfHeadPosition);

  dwarfSpotlightDirection.set(0, 1, 0);
  spotlight.directionOffset.vmult(dwarfSpotlightDirection, dwarfSpotlightDirection);
  body.quaternion.vmult(dwarfSpotlightDirection, dwarfSpotlightDirection);
  CoordinateConverter.physicsToRendering(spotlight.direction, dwarfSpotlightDirection);
}
