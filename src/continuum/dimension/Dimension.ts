import Product from "../../base/Product";
import IConfigDimension from "./IConfigDimension";

export default class Dimension extends Product<IConfigDimension> {
  protected extremeLow: number;
  protected extremeHigh: number;

  public get ExtremeLow(): number {
    return this.extremeLow;
  }

  public get ExtremeHigh(): number {
    return this.extremeHigh;
  }

  public Init(config: IConfigDimension): void {
    this.extremeLow = config.ExtremeLow;
    this.extremeHigh = config.ExtremeHigh;
  }
}
