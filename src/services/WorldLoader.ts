import { Body, Box, Plane, Vec3, World } from 'cannon';
import { mat4 } from 'gl-matrix';

import { ApplicationWorld } from 'models/ApplicationWorld';
import { BodilessModel } from 'models/BodilessModel';
import { PhysicalModel } from 'models/PhysicalModel';

import { Model } from 'interfaces/Model';

import { CoordinateConverter } from 'services/CoordinateConverter';
import { ModelPrototypeLoader } from 'services/ModelPrototypeLoader';

export class WorldLoader {
  private readonly modelPrototypeLoader: ModelPrototypeLoader;

  constructor(
    modelPrototypeLoader: ModelPrototypeLoader
  ) {
    this.modelPrototypeLoader = modelPrototypeLoader;
  }

  public async loadWorld(physicsWorld: World): Promise<ApplicationWorld> {
    const models: Model[] = [];

    const world = new ApplicationWorld(physicsWorld, models);

    await Promise.all([
      this.loadGround(world),
      this.loadCubeModel(world)
    ]);

    return world;
  }

  private async loadGround(applicationWorld: ApplicationWorld) {
    const modelPrototype = await this.modelPrototypeLoader.loadModelPrototype(
      'assets/models/ground.json',
      'assets/textures/ground_dirt_1226_9352_Small.jpg'
    );

    const scaleVector = CoordinateConverter.physicsToRendering(
      new Vec3(5, 5, 1)
    );
    mat4.scale(
      modelPrototype.modelMatrix,
      modelPrototype.modelMatrix,
      scaleVector
    );

    const groundShape = new Plane();
    const groundBody = new Body({ mass: 0 });
    groundBody.addShape(groundShape);
    applicationWorld.physicsWorld.addBody(groundBody);

    for (let x = -5; x <= 5; x += 1) {
      for (let y = -5; y <= 5; y += 1) {
        const ground = new BodilessModel(modelPrototype);

        const translationVector = CoordinateConverter.physicsToRendering(new Vec3(x, y, 0));
        mat4.translate(ground.modelMatrix, ground.modelMatrix, translationVector);

        applicationWorld.models.push(ground);
      }
    }
  }

  private async loadCubeModel(applicationWorld: ApplicationWorld) {
    const modelPrototype = await this.modelPrototypeLoader.loadModelPrototype(
      'assets/models/cube.json',
      'assets/textures/f16-texture.bmp'
    );

    const scaleVector = CoordinateConverter.physicsToRendering(
      new Vec3(1, 1, 1)
    );
    mat4.scale(
      modelPrototype.modelMatrix,
      modelPrototype.modelMatrix,
      scaleVector
    );

    const modelBody = new Body({ mass: 5, position: new Vec3(0, 0, 5) });
    const shape = new Box(new Vec3(0.5, 0.5, 0.5));
    modelBody.addShape(shape);
    applicationWorld.physicsWorld.addBody(modelBody);

    const cube = new PhysicalModel(modelPrototype, modelBody);
    applicationWorld.models.push(cube);
    applicationWorld.cube = cube;
  }
}
