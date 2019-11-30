import { IProductReusable } from "../../base/IProductReusable";
import { IInterval } from "../../util/IInterval";
import { IConfigItem } from "./IConfigItem";

export interface IItem extends IProductReusable<IConfigItem> {
  Velocity: number[];
  UpdatePosition(coordinates: number[]): void;
  Move();
  HandleCollisions(extremes: IInterval[]): void;
}
