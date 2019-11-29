import { ProductReusable } from "../../base/ProductReusable";
import { IConfigShape } from "./IConfigShape";
import { IShape } from "./IShape";

export abstract class Shape<TConfig extends IConfigShape = IConfigShape> extends ProductReusable<TConfig>
  implements IShape {
  public abstract Hide(): void;
  public abstract Show(): void;
}
