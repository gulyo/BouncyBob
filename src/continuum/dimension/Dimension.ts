import { Product } from "../../base/Product";
import { Event } from "../../util/event/Event";
import { IEvent } from "../../util/event/IEvent";
import { FactoryAcceleration } from "../acceleration/FactoryAcceleration";
import { IAcceleration } from "../acceleration/IAcceleration";
import { IConfigDimension } from "./IConfigDimension";
import { IDimension } from "./IDimension";

export class Dimension extends Product<IConfigDimension> implements IDimension {
  protected extremeLow: number;
  protected extremeHigh: number;

  protected onResize: IEvent = new Event();

  protected accelerators: IAcceleration[];

  public get OnResize(): IEvent {
    return this.onResize;
  }

  public get ExtremeLow(): number {
    return this.extremeLow;
  }

  public set ExtremeLow(value: number) {
    this.extremeLow = value;
  }

  public get ExtremeHigh(): number {
    return this.extremeHigh;
  }

  public set ExtremeHigh(value: number) {
    this.extremeHigh = value;
  }

  public Init(config: IConfigDimension): void {
    this.accelerators = config.Accelerators.map(conf => {
      const accelerator = FactoryAcceleration.Provide(conf.ClassName);
      accelerator.Init(conf.Config);
      return accelerator;
    });
  }
}
