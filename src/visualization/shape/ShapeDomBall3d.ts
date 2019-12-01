import { ShapeDomBall } from "./ShapeDomBall";

export class ShapeDomBall3d extends ShapeDomBall {
  public MoveTo(coordinates: number[]): void {
    super.MoveTo(coordinates);
    if (this.coordinates.length < 3) {
      throw new Error("Shape - DomBall3d needs at least three coordinates");
    }
    this.element.css("width", (this.diameter - this.coordinates[2]) / 2);
    this.element.css("height", (this.diameter - this.coordinates[2]) / 2);
  }
}
