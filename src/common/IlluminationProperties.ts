export class IlluminationProperties {
  public specularShininess: number;
  public diffuseCoefficient: number;
  public specularCoefficient: number;

  public clone(): IlluminationProperties {
    const cloned = new IlluminationProperties();
    cloned.specularShininess = this.specularShininess;
    cloned.diffuseCoefficient = this.diffuseCoefficient;
    cloned.specularCoefficient = this.specularCoefficient;

    return cloned;
  }
}
