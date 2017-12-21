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

  constructor(modelPrototypeLoader: ModelPrototypeLoader) {
    this.modelPrototypeLoader = modelPrototypeLoader;
  }

  public async loadWorld(physicsWorld: World): Promise<ApplicationWorld> {
    const models: Model[] = [];

    const world = new ApplicationWorld(physicsWorld, models);

    await Promise.all([
      this.loadGround(world),
      this.loadCubeModel(world),
      this.loadDwarf(world)
    ]);

    return world;
  }

  private async loadGround(applicationWorld: ApplicationWorld) {
    const groundPrototype = await this.modelPrototypeLoader.loadModelPrototype(
      'assets/models/ground.json',
      'assets/textures/ground_dirt_1226_9352_Small.jpg'
    );

    const scaleVector = CoordinateConverter.physicsToRendering(
      new Vec3(5, 5, 1)
    );
    mat4.scale(
      groundPrototype.modelMatrix,
      groundPrototype.modelMatrix,
      scaleVector
    );

    const groundShape = new Plane();
    const groundBody = new Body({ mass: 0 });
    groundBody.addShape(groundShape);
    applicationWorld.physicsWorld.addBody(groundBody);

    for (let x = -5; x <= 5; x += 1) {
      for (let y = -5; y <= 5; y += 1) {
        const ground = new BodilessModel(groundPrototype);

        const translationVector = CoordinateConverter.physicsToRendering(
          new Vec3(x, y, 0)
        );
        mat4.translate(
          ground.modelMatrix,
          ground.modelMatrix,
          translationVector
        );

        applicationWorld.models.push(ground);
      }
    }
  }

  private async loadCubeModel(applicationWorld: ApplicationWorld) {
    const cubePrototype = await this.modelPrototypeLoader.loadModelPrototype(
      'assets/models/cube.json',
      'assets/textures/f16-texture.bmp'
    );

    const cubeBody = new Body({ mass: 5, position: new Vec3(0, 0, 5) });
    const shape = new Box(new Vec3(0.5, 0.5, 0.5));
    cubeBody.addShape(shape);
    applicationWorld.physicsWorld.addBody(cubeBody);

    const cube = new PhysicalModel(cubePrototype, cubeBody);
    applicationWorld.models.push(cube);
  }

  private async loadDwarf(applicationWorld: ApplicationWorld) {
    const dwarfPrototype = await this.modelPrototypeLoader.loadModelPrototype(
      'assets/models/Dwarf_2_Very_Low-centered.json',
      'assets/textures/dwarf_2_1K_color.jpg'
    );

    const rotationAxis = CoordinateConverter.physicsToRendering(
      new Vec3(0, 0, 1)
    );
    mat4.rotate(
      dwarfPrototype.modelMatrix,
      dwarfPrototype.modelMatrix,
      Math.PI,
      rotationAxis
    );

    const dwarfBody = new Body({ mass: 70, position: new Vec3(2, 2, 5) });
    const shape = new Box(new Vec3(0.4, 0.3, 0.75));
    dwarfBody.addShape(shape);
    applicationWorld.physicsWorld.addBody(dwarfBody);

    const dwarf = new PhysicalModel(dwarfPrototype, dwarfBody);
    applicationWorld.models.push(dwarf);
    applicationWorld.dwarf = dwarf;
  }
}
