import { Product } from "../../base/Product";
import { Event } from "../../util/event/Event";
import { IEvent } from "../../util/event/IEvent";
import { FactoryDimension } from "../dimension/FactoryDimension";
import { IDimension } from "../dimension/IDimension";
import { IConfigSpace } from "./IConfigSpace";
import { ISpace } from "./ISpace";

export class Space extends Product<IConfigSpace> implements ISpace {
  protected dimensions: IDimension[];
  protected onResize: IEvent = new Event();

  public get Dimensions(): IDimension[] {
    return this.dimensions;
  }

  public get OnResize(): IEvent {
    return this.onResize;
  }

  public Init(config: IConfigSpace): void {
    this.dimensions = config.Dimensions.map(conf => {
      const dimension = FactoryDimension.Provide(conf.ClassName);
      dimension.Init(conf.Config);
      return dimension;
    });
  }
}
