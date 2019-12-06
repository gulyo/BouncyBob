import { IConfigWorldDom2d } from "./IConfigWorldDom2d";
import { WorldDom2d } from "./WorldDom2d";
import STORY from "./WorldDomAlice.html";
import STYLE from "./WorldDomAlice.m.scss";

export class WorldDomAlice extends WorldDom2d {
  public Init(config: IConfigWorldDom2d): void {
    super.Init(config);
    this.element.append(
      $(`
        <div class="${STYLE.worldBall}">
            <div class="${STYLE.story}">
                ${STORY}
            </div>
        </div>`),
    );
  }

  protected setUpElementClass(): void {
    this.element.addClass(STYLE.worldContainer);
  }
}
