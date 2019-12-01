import { IInterval } from "../../util/IInterval";
import { selectDomElement } from "../../util/selectDomElement";
import { IConfigWorldDom2d } from "./IConfigWorldDom2d";
import { IWorld } from "./IWorld";
import { World } from "./World";
import STYLE from "./WorldDom2d.m.scss";

export class WorldDom2d<TConfig extends IConfigWorldDom2d = IConfigWorldDom2d> extends World<TConfig>
  implements IWorld {
  protected element: JQuery;
  protected resizeTimerId: number;

  public Hide(): void {
    this.element.addClass(STYLE.hidden);
  }

  public Init(config: TConfig): void {
    super.Init(config);
    this.element = selectDomElement(config.ElementSelector);
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
    return this.getExtremes();
  }

  protected getExtremes(): IInterval[] {
    return [
      { Low: 0, High: this.element.innerWidth() },
      { Low: 0, High: this.element.innerHeight() },
    ];
  }
}
