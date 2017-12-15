import * as expandVertexData from 'expand-vertex-data';

export class ModelPrototypeLoader {
  public async loadModel(sourceUrl: string) {
    const response = await fetch(sourceUrl);
    const vertexData = await response.json();

    const expandedVertexData = expandVertexData(vertexData);
    // TODO: create a model prototype from this data
    // FIXME: check for null values
    console.log(expandedVertexData);
  }
}
