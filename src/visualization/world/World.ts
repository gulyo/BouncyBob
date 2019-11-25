import { Product } from "../../base/Product";
import { IConfigWorld } from "./IConfigWorld";
import { IWorld } from "./IWorld";

export abstract class World extends Product<IConfigWorld> implements IWorld {
  protected name: string;

  public abstract Hide(): void;
  public abstract Show(): void;

  public Init(config: IConfigWorld): void {
    this.name = config.Name;
  }
}
