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
      }.bind(this),
    );
  }

  protected resizeSvg() {
    const extremes = this.getExtremes();
    this.svgElement.size(extremes[0].High - extremes[0].Low, extremes[1].High - extremes[1].Low);
  }
}
