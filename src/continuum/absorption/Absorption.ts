import { Product } from "../../base/Product";
import { IAbsorption } from "./IAbsorption";
import { IConfigAbsorption } from "./IConfigAbsorption";

export class Absorption<TConfig extends IConfigAbsorption = IConfigAbsorption> extends Product<TConfig>
  implements IAbsorption {
  protected config: TConfig;

  public Init(config: TConfig): void {
    this.config = config;
  }

  public UpdateVelocity(velocity: number): number {
    return velocity;
  }
}
