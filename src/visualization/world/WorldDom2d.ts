import { IInterval } from "../../util/IInterval";
import { IConfigWorldDom2d } from "./IConfigWorldDom2d";
import { IWorld } from "./IWorld";
import { World } from "./World";
import STYLE from "./WorldDom2d.m.scss";

export class WorldDom2d extends World implements IWorld {
  private element: JQuery;
  private resizeTimerId: number;

  public Hide(): void {
    this.element.addClass(STYLE.hidden);
  }

  public Init(config: IConfigWorldDom2d): void {
    super.Init(config);
    this.element = $(config.ElementSelector);
    if (!this.element.length) {
      throw new Error(`Element selector "${config.ElementSelector}" gave no result in WorldVisualizer`);
    }
    this.element.addClass(STYLE.worldContainer);

    $(window).on("resize", () => {
      // I only want to handle the end of resize
      if (!!this.resizeTimerId) {
        window.clearTimeout(this.resizeTimerId);
      }
      this.resizeTimerId = window.setTimeout(() => this.onResize.Trigger(), 500);
    });
  }

  public Show(): void {
    this.element.removeClass(STYLE.hidden);
    super.Show();
  }

  public get Extremes(): IInterval[] {
    return [
      { Low: 0, High: this.element.innerWidth() },
      { Low: 0, High: this.element.innerHeight() },
    ];
  }
}
