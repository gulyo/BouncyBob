import TYPE from "./ShapeDomAlice.m.scss";
import { ShapeDomBall } from "./ShapeDomBall";

export class ShapeDomAlice extends ShapeDomBall {
  public MoveTo(coordinates: number[]): void {
    super.MoveTo(coordinates);
    if (this.coordinates.length < 2) {
      throw new Error("Shape - DomAlice needs at least two coordinates");
    }
    this.element.css("left", (this.container.innerWidth() - this.coordinates[0] - this.diameter) / 2 + 8);
    this.element.css("top", (this.container.innerHeight() - this.coordinates[1] - this.diameter) / 2 + 8);
  }
  protected createElement(): void {
    this.element = $(`<div class="${TYPE.domAlice}"></div>`);
  }
}
