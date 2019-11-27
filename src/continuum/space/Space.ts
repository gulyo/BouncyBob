import { Product } from "../../base/Product";
import { BBEvent } from "../../util/event/BBEvent";
import { IEvent } from "../../util/event/IEvent";
import { FactoryWorld } from "../../visualization/world/FactoryWorld";
import { IWorld } from "../../visualization/world/IWorld";
import { FactoryDimension } from "../dimension/FactoryDimension";
import { IDimension } from "../dimension/IDimension";
import { IConfigSpace } from "./IConfigSpace";
import { ISpace } from "./ISpace";

export class Space extends Product<IConfigSpace> implements ISpace {
  protected dimensions: IDimension[];
  protected onResize: IEvent = new BBEvent();
  protected visualizer: IWorld;

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

    this.visualizer = FactoryWorld.Provide(config.Visualizer.ClassName);
    this.visualizer.Init(config.Visualizer.Config);
    this.visualizer.OnResize.SignUp(() => this.OnResize.Trigger());

    // Adding dimension updates to onResize
    this.onResize.SignUp(() => this.updateDimensionExtremes());

    this.visualizer.Show();
  }

  protected updateDimensionExtremes(): void {
    const extremes = this.visualizer.Extremes;
    // There might be hidden or self-defined Dimensions, so I am not very picky
    // with lengths, though I presume the "i -> j <=> i == j" mapping
    // contract is still alive
    for (let i: number = 0; i < Math.min(this.dimensions.length, extremes.length); ++i) {
      const dimension: IDimension = this.dimensions[i];
      dimension.ExtremeHigh = extremes[i].High;
      dimension.ExtremeLow = extremes[i].Low;
    }
  }
}
