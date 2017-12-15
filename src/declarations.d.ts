declare function require(path: string): any;

declare module 'expand-vertex-data' {
  interface CompressedVertexData {
    vertexPositionIndices: number[];
    vertexPositions: number[];
    vertexNormalIndices?: number[];
    vertexNormals?: number[];
    vertexUVIndices?: number[];
    vertexUVs?: number[];
  }

  interface Options {
    /**
     * Use this when working with JSON that came from `wavefront-obj-parser`
     */
    facesToTriangles: boolean;
  }

  /**
   * **n** is the number of `vertexPositionIndices` that were returned after expansion
   */
  interface ExpandedVertexData {
    /**
     * Length: n
     */
    positionIndices: number[];

    /**
     * Length: n * 3
     */
    positions: number[];

    /**
     * Length: n * 3
     */
    normals: number[];

    /**
     * Length: n * 2
     */
    uvs: number[];

    /**
     * There are four joint influences per vertex, even if there aren't four influencing joints.
     * In cases where there is no joint there will be a weight of zero. This is because you
     * need every joint to have the same number of weights when you vertex shader attributes.
     *
     * Length: n * 4
     */
    jointInfuences: number[];

    /**
     * An array of joint weights. A weight is a number between 0 - 1 that signifies how much
     * the corresponding joint should affect the corresponding vertex.
     *
     * There are four weights per vertex, even if there aren't four influencing joints.
     * In cases where there is no joint there will be a weight of zero.
     *
     * This is because you need every joint to have the same number of weights
     * when you vertex shader attributes.
     *
     * Length: n * 4
     */
    jointWeights: number[];
  }

  function expandVertexData(
    compressedVertexData: CompressedVertexData,
    options?: Partial<Options>
  ): ExpandedVertexData;

  export = expandVertexData;
}
