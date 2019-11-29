import { PoolShape } from "./PoolShape";
import { ShapeDomBall } from "./ShapeDomBall";

export enum NameShape {
  DOM_BALL = "DomBall",
}

PoolShape.Register(NameShape.DOM_BALL, ShapeDomBall);
