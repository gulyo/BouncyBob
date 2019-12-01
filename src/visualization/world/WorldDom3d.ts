import { IConfigWorldDom3d } from "./IConfigWorldDom3d";
import { WorldDom2d } from "./WorldDom2d";
import STYLE from "./WorldDom3d.m.scss";

export class WorldDom3d extends WorldDom2d<IConfigWorldDom3d> {
  public Init(config: IConfigWorldDom3d): void {
    super.Init(config);
    this.element.addClass(STYLE.world3D);
  }

  protected updateExtremes(): void {
    super.updateExtremes();
    this.extremes.push(this.config.DepthInterval);
  }
}
