import { IProductReusable } from "../../base/IProductReusable";
import { IConfigItem } from "./IConfigItem";

export interface IItem extends IProductReusable<IConfigItem> {
  Velocity: number[];
  UpdatePosition(coordinates: number[]): void;
  Move();
}
