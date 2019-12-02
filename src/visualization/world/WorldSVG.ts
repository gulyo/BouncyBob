import { Svg, SVG } from "@svgdotjs/svg.js";
import { IConfigWorldDom2d } from "./IConfigWorldDom2d";
import { WorldDom2d } from "./WorldDom2d";

export class WorldSVG extends WorldDom2d {
  protected svgElement: Svg;

  public Init(config: IConfigWorldDom2d): void {
    super.Init(config);
    this.svgElement = SVG().addTo(this.element[0]);
    this.resizeSvg();
    this.OnResize.SignUp(
      function() {
        this.resizeSvg();
      }.bind(this)
    );
  }

  protected resizeSvg() {
    this.updateExtremes();
    this.svgElement.size(this.extremes[0].High - this.extremes[0].Low, this.extremes[1].High - this.extremes[1].Low);
  }
}
