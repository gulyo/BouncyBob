import { Product } from "../../base/Product";
import { BBEvent } from "../../util/event/BBEvent";
import { IEvent } from "../../util/event/IEvent";
import { logBouncyBob } from "../../util/logConfig";
import { Notifier } from "../../util/Notifier";
import { FactoryWorld } from "../../visualization/world/FactoryWorld";
import { IWorld } from "../../visualization/world/IWorld";
import { FactoryCreator } from "../creator/FactoryCreator";
import { IArgumentEventCreation } from "../creator/IArgumentEventCreation";
import { ICreator } from "../creator/ICreator";
import { FactoryDimension } from "../dimension/FactoryDimension";
import { IDimension } from "../dimension/IDimension";
import { IItem } from "../item/IItem";
import { PoolItem } from "../item/PoolItem";
import { IConfigSpace } from "./IConfigSpace";
import { ISpace } from "./ISpace";

export class Space extends Product<IConfigSpace> implements ISpace {
  protected dimensions: IDimension[];
  protected onResize: IEvent = new BBEvent();
  protected visualizer: IWorld;
  protected creators: ICreator[];
  protected config: IConfigSpace;

  protected items: Map<string, IItem> = new Map<string, IItem>();

  public get Dimensions(): IDimension[] {
    return this.dimensions;
  }

  public get OnResize(): IEvent {
    return this.onResize;
  }

  public Init(config: IConfigSpace): void {
    this.config = config;

    this.setUpDimensions();
    this.setUpCreators();

    this.visualizer = FactoryWorld.Provide(config.Visualizer.ClassName);
    this.visualizer.Init(config.Visualizer.Config);
    this.visualizer.OnResize.SignUp(() => this.OnResize.Trigger());

    // Adding dimension updates to onResize
    this.onResize.SignUp(() => this.updateDimensionExtremes());

    this.visualizer.Show();
  }

  public Update(): void {
    this.items.forEach((item: IItem) => {
      const tmpVelocity: number[] = item.Velocity;
      for (let i: number = 0; i < Math.min(tmpVelocity.length, this.dimensions.length); ++i) {
        const dimension: IDimension = this.dimensions[i];
        tmpVelocity[i] = dimension.Accelerators.reduce(
          (result, current) => current.UpdateVelocity(result),
          tmpVelocity[i],
        );
      }
      item.Velocity = tmpVelocity;
      item.Move();
    });
  }

  protected setUpDimensions() {
    this.dimensions = this.config.Dimensions.map(conf => {
      const dimension = FactoryDimension.Provide(conf.ClassName);
      dimension.Init(conf.Config);
      return dimension;
    });
  }

  protected setUpCreators() {
    this.creators = this.config.Creators.map(descriptor => {
      const creator = FactoryCreator.Provide(descriptor.ClassName);
      creator.Init(descriptor.Config);
      creator.OnCreation.SignUp(this.creatorOnCreationFn.bind(this));
      return creator;
    });
  }

  protected creatorOnCreationFn(creationArg: IArgumentEventCreation): void {
    if (!PoolItem.CanProvide) {
      const msg: string = "Cannot create more Items - Space reached its limit";
      Notifier.Notify(msg);
      logBouncyBob.warn({ msg, data: PoolItem.Limit });
      return;
    }
    const item: IItem = PoolItem.Provide(creationArg.Descriptor.ClassName);
    item.Init(creationArg.Descriptor.Config);
    this.items.set(item.GUId, item);
    item.OnDeactivate.SignUp(((guid: string) => () => this.items.delete(guid))(item.GUId));
    item.UpdatePosition(creationArg.Coordinates);
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
