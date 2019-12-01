import { PoolShape } from "./PoolShape";
import { ShapeDomBall } from "./ShapeDomBall";
import { ShapeDomBall3d } from "./ShapeDomBall3d";
import { ShapeSvgBall } from "./ShapeSvgBall";

export enum NameShape {
  DOM_BALL = "DomBall",
  DOM_BALL_3D = "DomBall3d",
  SVG_BALL = "SvgBall",
}

PoolShape.Register(NameShape.DOM_BALL, ShapeDomBall);
PoolShape.Register(NameShape.DOM_BALL_3D, ShapeDomBall3d);
PoolShape.Register(NameShape.SVG_BALL, ShapeSvgBall);
