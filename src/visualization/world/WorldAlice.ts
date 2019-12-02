import STYLE from "./WorldAlice.m.scss";
import { WorldDom2d } from "./WorldDom2d";

export class WorldAlice extends WorldDom2d {
  protected element: JQuery;

  public Hide(): void {
    this.element.addClass(STYLE.hidden);
  }

  protected setUpElementClass(): void {
    this.element.addClass(STYLE.worldAlice);
  }

  protected updateExtremes() {
    this.extremes = [
      { Low: this.element.innerWidth() / -2, High: this.element.innerWidth() / 2 },
      { Low: this.element.innerHeight() / -2, High: this.element.innerHeight() / 2 },
    ];
  }
}
