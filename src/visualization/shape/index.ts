import { PoolShape } from "./PoolShape";
import { ShapeDomBall } from "./ShapeDomBall";
import { ShapeDomBall3d } from "./ShapeDomBall3d";

export enum NameShape {
  DOM_BALL = "DomBall",
  DOM_BALL_3D = "DomBall3d",
}

PoolShape.Register(NameShape.DOM_BALL, ShapeDomBall);
PoolShape.Register(NameShape.DOM_BALL_3D, ShapeDomBall3d);
