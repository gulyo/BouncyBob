import { Product } from "../../base/Product";
import { BBEvent } from "../../util/event/BBEvent";
import { IEvent } from "../../util/event/IEvent";
import { IInterval } from "../../util/IInterval";
import { IConfigWorld } from "./IConfigWorld";
import { IWorld } from "./IWorld";

export abstract class World<TConfig extends IConfigWorld = IConfigWorld> extends Product<TConfig> implements IWorld {
  protected name: string;
  protected onResize: IEvent = new BBEvent();
  protected config: TConfig;

  public abstract Hide(): void;
  public Show(): void {
    this.onResize.Trigger();
  }

  public Init(config: TConfig): void {
    this.name = config.Name;
    this.config = config;
  }

  public abstract get Extremes(): IInterval[];

  public get OnResize(): IEvent {
    return this.onResize;
  }
}
