import { IProductReusable } from "../../base/IProductReusable";
import { IInterval } from "../../util/IInterval";
import { IVisualizer } from "../IVisualizer";
import { IConfigShape } from "./IConfigShape";

export interface ICollision {
  Collided: boolean;
  Overdrive?: number;
}

export interface IShape<TConfig extends IConfigShape = IConfigShape>
  extends IVisualizer<TConfig>,
    IProductReusable<TConfig> {
  MoveTo(coordinates: number[]): void;

  CalculateCollisions(extremes: IInterval[]): ICollision[];
}
