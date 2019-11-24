import appConfig from "../../appConfig";
import Product from "../../base/Product";
import IAcceleration from "./IAcceleration";
import IConfigAcceleration from "./IConfigAcceleration";

export default class AccelerationGravity extends Product<IConfigAcceleration> implements IAcceleration {
  protected coefficient: number;

  public Init(config: IConfigAcceleration): void {
    this.coefficient = config.Constants.coefficient;
  }

  public UpdateVelocity(velocity: number): number {
    // v = s / t
    // a = v / t
    // delta(v) = t * a
    return velocity + this.coefficient * appConfig.timeStep;
  }
}
