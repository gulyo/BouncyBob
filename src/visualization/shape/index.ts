import { PoolShape } from "./PoolShape";
import { ShapeDomBall } from "./ShapeDomBall";
import { ShapeDomBall3d } from "./ShapeDomBall3d";
import { ShapeLog } from "./ShapeLog";
import { ShapeSvgBall } from "./ShapeSvgBall";

export enum NameShape {
  DOM_BALL = "DomBall",
  DOM_BALL_3D = "DomBall3d",
  SVG_BALL = "SvgBall",
  LOG_BALL = "LogBall",
}

PoolShape.Register(NameShape.DOM_BALL, ShapeDomBall);
PoolShape.Register(NameShape.DOM_BALL_3D, ShapeDomBall3d);
PoolShape.Register(NameShape.SVG_BALL, ShapeSvgBall);
PoolShape.Register(NameShape.LOG_BALL, ShapeLog);
