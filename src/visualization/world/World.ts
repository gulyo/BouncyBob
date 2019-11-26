import { Product } from "../../base/Product";
import { BBEvent } from "../../util/event/BBEvent";
import { IEvent } from "../../util/event/IEvent";
import { IInterval } from "../../util/IInterval";
import { IConfigWorld } from "./IConfigWorld";
import { IWorld } from "./IWorld";

export abstract class World extends Product<IConfigWorld> implements IWorld {
  protected name: string;
  protected onResize: IEvent = new BBEvent();

  public abstract Hide(): void;
  public abstract Show(): void;

  public Init(config: IConfigWorld): void {
    this.name = config.Name;
  }

  public abstract get Extremes(): IInterval[];

  public get OnResize(): IEvent {
    return this.onResize;
  }
}
