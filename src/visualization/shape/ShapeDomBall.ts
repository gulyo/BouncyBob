import { IInterval } from "../../util/IInterval";
import { selectDomElement } from "../../util/selectDomElement";
import { IConfigShapeDomBall } from "./IConfigShapeDomBall";
import { ICollision } from "./IShape";
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
    this.element = $(`<div class="${STYLE.domBall}" id="${this.GUId}"></div>`);
    this.element.width(this.diameter);
    this.element.height(this.diameter);

    this.container.append(this.element);
  }

  public MoveTo(coordinates: number[]): void {
    super.MoveTo(coordinates);
    if (this.coordinates.length < 2) {
      throw new Error("Shape - DomBall needs at least two coordinates");
    }
    this.element.css("left", this.coordinates[0] - this.diameter / 2);
    this.element.css("top", this.coordinates[1] - this.diameter / 2);
  }

  public CalculateCollisions(extremes: IInterval[]): ICollision[] {
    const collisions: ICollision[] = [];
    for (let i: number = 0; i < Math.min(this.coordinates.length, extremes.length); ++i) {
      const coordinate: number = this.coordinates[i];
      const extreme: IInterval = extremes[i];
      if (coordinate < extreme.Low + this.diameter / 2) {
        collisions.push({ Collided: true, Overdrive: extreme.Low + this.diameter / 2 - coordinate });
      } else if (coordinate > extreme.High - this.diameter / 2) {
        collisions.push({ Collided: true, Overdrive: extreme.High - this.diameter / 2 - coordinate });
      } else {
        collisions.push({ Collided: false });
      }
    }
    return collisions;
  }
}
