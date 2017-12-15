// tslint:disable-next-line:no-require-imports
import expandVertexData = require('expand-vertex-data');

export class ModelPrototypeLoader {
  public async loadModel(sourceUrl: string) {
    const response = await fetch(sourceUrl);
    const vertexData = await response.json();

    const expandedVertexData = expandVertexData(vertexData);
    // TODO: create a model prototype from this data
    console.log(expandedVertexData);
  }
}
