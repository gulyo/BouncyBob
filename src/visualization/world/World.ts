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
  protected resizeTimerId: number;

  public abstract Hide(): void;
  public Show(): void {
    this.onResize.Trigger();
  }

  public Init(config: TConfig): void {
    this.name = config.Name;
    this.config = config;
    $(window).on("resize", () => {
      // I only want to handle the end of resize
      if (!!this.resizeTimerId) {
        window.clearTimeout(this.resizeTimerId);
      }
      this.resizeTimerId = window.setTimeout(() => this.onResize.Trigger(), 500);
    });
  }

  public abstract get Extremes(): IInterval[];

  public get OnResize(): IEvent {
    return this.onResize;
  }
}
