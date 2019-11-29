import { ProductReusable } from "../../base/ProductReusable";
import { IConfigShape } from "./IConfigShape";
import { IShape } from "./IShape";

export abstract class Shape<TConfig extends IConfigShape = IConfigShape> extends ProductReusable<TConfig>
  implements IShape {
  protected coordinates: number[];

  public abstract Hide(): void;
  public abstract Show(): void;

  public MoveTo(coordinates: number[]): void {
    this.coordinates = [...coordinates];
  }
}
