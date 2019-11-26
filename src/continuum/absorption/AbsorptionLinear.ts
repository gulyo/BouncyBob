import { Absorption } from "./Absorption";
import { IConfigAbsorptionLinear } from "./IConfigAbsorptionLinear";

export class AbsorptionLinear extends Absorption<IConfigAbsorptionLinear> {
  public UpdateVelocity(velocity: number): number {
    return velocity * this.config.Constants.Coefficient;
  }
}
