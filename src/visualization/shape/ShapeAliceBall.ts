import STYLE from "./ShapeAliceBall.m.scss";
import { ShapeDomBall } from "./ShapeDomBall";

export class ShapeAliceBall extends ShapeDomBall {
  public Show(): void {
    this.element = $(`<div class="${STYLE.aliceBall}" id="${this.GUId}"></div>`);

    this.container.append(this.element);
  }

  public MoveTo(coordinates: number[]): void {
    super.MoveTo(coordinates);
    if (this.coordinates.length < 2) {
      throw new Error("Shape - AliceBall needs at least two coordinates");
    }
    this.element.css("left", this.coordinates[0] - this.diameter / 2);
    this.element.css("top", this.coordinates[1] - this.diameter / 2);
  }
}
