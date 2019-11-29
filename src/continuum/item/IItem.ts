import { IProductReusable } from "../../base/IProductReusable";
import { IConfigItem } from "./IConfigItem";

export interface IItem extends IProductReusable<IConfigItem> {
  UpdatePosition(coordinates: number[]): void;
}
