import Product from "../../base/Product";
import IAcceleration from "./IAcceleration";
import IConfigAcceleration from "./IConfigAcceleration";

export default class AccelerationGravity extends Product<IConfigAcceleration> implements IAcceleration {
  protected coefficient: number;
  /**
   * Milliseconds
   */
  protected timeStep: number;

  public Init(config: IConfigAcceleration): void {
    this.coefficient = config.Constants.coefficient;
    this.timeStep = config.Constants.timeStep;
  }

  public UpdateVelocity(velocity: number): number {
    // v = s / t
    // a = v / t
    // delta(v) = t * a
    return velocity + this.coefficient * this.timeStep;
  }

}
