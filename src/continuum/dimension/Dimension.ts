import Product from "../../base/Product";
import Event from "../../util/event/Event";
import IEvent from "../../util/event/IEvent";
import IConfigDimension from "./IConfigDimension";
import IDimension from "./IDimension";

export default class Dimension extends Product<IConfigDimension> implements IDimension {
  protected extremeLow: number;
  protected extremeHigh: number;

  protected onResize: IEvent = new Event();

  public get OnResize(): IEvent {
    return this.onResize;
  }

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
