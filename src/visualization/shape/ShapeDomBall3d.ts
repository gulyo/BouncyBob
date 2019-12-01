import { IConfigShapeDomBall } from "./IConfigShapeDomBall";
import { ShapeDomBall } from "./ShapeDomBall";

export class ShapeDomBall3d extends ShapeDomBall {
  protected diameterCoefficient: number;

  public Init(config: IConfigShapeDomBall): void {
    super.Init(config);
    this.diameterCoefficient = config.Constants.DiameterCoefficient;
  }

  public MoveTo(coordinates: number[]): void {
    super.MoveTo(coordinates);
    if (this.coordinates.length < 3) {
      throw new Error("Shape - DomBall3d needs at least three coordinates");
    }
    const diameter: number = this.diameter - this.coordinates[2] * this.diameterCoefficient;
    this.element.css("width", diameter);
    this.element.css("height", diameter);
  }
}
