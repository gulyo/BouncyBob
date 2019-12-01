import { IInterval } from "../../util/IInterval";
import { selectDomElement } from "../../util/selectDomElement";
import { IConfigWorldDom2d } from "./IConfigWorldDom2d";
import { IWorld } from "./IWorld";
import { World } from "./World";
import STYLE from "./WorldDom2d.m.scss";

export class WorldDom2d<TConfig extends IConfigWorldDom2d = IConfigWorldDom2d> extends World<TConfig>
  implements IWorld {
  protected element: JQuery;
  protected extremes: IInterval[];

  public Hide(): void {
    this.element.addClass(STYLE.hidden);
  }

  public Init(config: TConfig): void {
    super.Init(config);
    this.element = selectDomElement(config.ElementSelector);
    this.setUpElementClass();

    this.updateExtremes();
    this.onResize.SignUp(() => this.updateExtremes());
  }

  public Show(): void {
    this.element.removeClass(STYLE.hidden);
    super.Show();
  }

  public get Extremes(): IInterval[] {
    return this.extremes;
  }

  protected updateExtremes() {
    this.extremes = [
      { Low: 0, High: this.element.innerWidth() },
      { Low: 0, High: this.element.innerHeight() }
    ];
  }

  protected setUpElementClass(): void {
    this.element.addClass(STYLE.worldContainer);
  }

}
