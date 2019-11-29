import { selectDomElement } from "../../util/selectDomElement";
import { IConfigShapeDomBall } from "./IConfigShapeDomBall";
import { Shape } from "./Shape";
import STYLE from "./ShapeDomBall.m.scss";

export class ShapeDomBall extends Shape<IConfigShapeDomBall> {
  protected container: JQuery;
  protected element: JQuery;
  protected diameter: number;

  public Hide(): void {
    this.element.remove();
  }

  public Init(config: IConfigShapeDomBall): void {
    this.container = selectDomElement(config.ContainerSelector);
    this.diameter = config.Constants.Diameter;
  }

  public Show(): void {
    this.element = $(`<div class="${STYLE.domBall}"></div>`);
    this.element.width(this.diameter);
    this.element.height(this.diameter);

    this.container.append(this.element);
  }
}
