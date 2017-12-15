import { mat4, vec3 } from 'gl-matrix';

import { ShaderType } from 'common/ShaderType';

import { Camera } from 'models/Camera';
import { WebGLProgramFacade } from 'models/WebGLProgramFacade';

import { ImageLoader } from 'services/ImageLoader';
import { ModelPrototypeLoader } from 'services/ModelPrototypeLoader';
import { ShaderCompiler } from 'services/ShaderCompiler';

// tslint:disable no-require-imports import-name no-var-requires
const fragmentShaderSource = require('./shaders/fragment-shader.glsl');
const vertexShaderSource = require('./shaders/vertex-shader.glsl');
// tslint:enable no-require-imports, import-name

export class Application {
  private readonly canvas: HTMLCanvasElement;
  private readonly gl: WebGLRenderingContext;

  private readonly camera: Camera;
  private programFacade: WebGLProgramFacade;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    const gl = this.canvas.getContext('webgl');
    if (!gl) {
      throw new Error('WebGL not supported');
    }

    this.gl = gl;

    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
    // tslint:disable-next-line:no-bitwise
    this.gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    this.camera = new Camera(
      vec3.fromValues(1, 10, -15),
      vec3.fromValues(0, 5, 0)
    );
  }

  // tslint:disable-next-line:max-func-body-length
  public async run() {
    const gl = this.gl;
    this.initProgram();

    const imageLoader = new ImageLoader();
    const modelPrototypeLoader = new ModelPrototypeLoader(this.gl, imageLoader);
    const modelPrototype = await modelPrototypeLoader.loadModelPrototype(
      'models/dwarf.json',
      'models/texture.bmp'
    );

    const program = this.programFacade.program;
    const vertexPositionAttribute = gl.getAttribLocation(
      program,
      'aVertexPosition'
    );
    gl.enableVertexAttribArray(vertexPositionAttribute);

    const textureCoordsAttribute = gl.getAttribLocation(
      program,
      'aTextureCoords'
    );
    gl.enableVertexAttribArray(textureCoordsAttribute);

    const modelMatrixUniform = <WebGLUniformLocation>gl.getUniformLocation(
      program,
      'uModelMatrix'
    );
    const viewMatrixUniform = <WebGLUniformLocation>gl.getUniformLocation(
      program,
      'uViewMatrix'
    );
    const projectionMatrixUniform = <WebGLUniformLocation>gl.getUniformLocation(
      program,
      'uProjectionMatrix'
    );
    const textureSamplerUniform = <WebGLUniformLocation>gl.getUniformLocation(
      program,
      'uTextureSampler'
    );

    const projectionMatrix = mat4.create();
    mat4.perspective(
      projectionMatrix,
      45,
      this.canvas.width / this.canvas.height,
      0.1,
      100
    );

    const modelMatrix = mat4.create();
    mat4.identity(modelMatrix);

    gl.uniformMatrix4fv(modelMatrixUniform, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniform, false, this.camera.viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniform, false, projectionMatrix);

    modelPrototype.texture.activate(textureSamplerUniform);

    mat4.scale(modelMatrix, modelMatrix, [50, 50, 50]);
    mat4.rotateY(modelMatrix, modelMatrix, Math.PI);
    gl.uniformMatrix4fv(modelMatrixUniform, false, modelMatrix);

    modelPrototype.vertexPositionBuffer.bind(vertexPositionAttribute);
    modelPrototype.vertexTextureCoordsBuffer.bind(textureCoordsAttribute);

    modelPrototype.vertexIndexBuffer.bind();
    gl.drawElements(
      gl.TRIANGLES,
      modelPrototype.vertexIndexBuffer.itemsCount,
      gl.UNSIGNED_SHORT,
      0
    );
  }

  private initProgram() {
    const shaderCompiler = new ShaderCompiler(this.gl);

    const vertexShader = shaderCompiler.compileShader(
      vertexShaderSource,
      ShaderType.VertexShader
    );
    const fragmentShader = shaderCompiler.compileShader(
      fragmentShaderSource,
      ShaderType.FragmentShader
    );

    this.programFacade = new WebGLProgramFacade(
      this.gl,
      vertexShader,
      fragmentShader
    );
    this.programFacade.use();
  }
}
