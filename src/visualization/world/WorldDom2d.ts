import { IConfigWorldDom2d } from "./IConfigWorldDom2d";
import { IWorld } from "./IWorld";
import { World } from "./World";
import STYLE from "./WorldDom2d.scss";

export class WorldDom2d extends World implements IWorld {
  private element: JQuery;

  public Hide(): void {
    this.element.addClass(STYLE.hidden);
  }

  public Init(config: IConfigWorldDom2d): void {
    super.Init(config);
    this.element = $(config.ElementSelector);
    if (!this.element.length) {
      throw new Error(`Element selector "${config.ElementSelector}" gave no result in WorldVisualizer`);
    }
  }

  public Show(): void {
    this.element.removeClass(STYLE.hidden);
  }
}
