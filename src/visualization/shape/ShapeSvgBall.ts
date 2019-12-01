import { Circle, Svg, SVG } from "@svgdotjs/svg.js";
import COLOURS from "../../style/colours.scss";
import { IConfigShapeDomBall } from "./IConfigShapeDomBall";
import { ShapeBall } from "./ShapeBall";

export class ShapeSvgBall extends ShapeBall {
  protected container: Svg;
  protected element: Circle;

  public Hide(): void {
    this.element.remove();
  }

  public Init(config: IConfigShapeDomBall): void {
    this.diameter = config.Constants.Diameter;
    this.container = SVG(`${config.ContainerSelector} svg`) as Svg;
    this.element = this.container.circle(this.diameter);
  }

  public Show(): void {
    this.element.fill(COLOURS.favouriteBlue);
  }

  public MoveTo(coordinates: number[]): void {
    super.MoveTo(coordinates);
    if (this.coordinates.length < 2) {
      throw new Error("Svg visualizer needs at last two coordinates");
    }
    this.element.move(this.coordinates[0] - this.diameter / 2, this.coordinates[1] - this.diameter / 2);
  }
}
