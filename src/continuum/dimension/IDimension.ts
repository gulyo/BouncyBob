import { IProduct } from "../../base/IProduct";
import { IAcceleration } from "../acceleration/IAcceleration";
import { IConfigDimension } from "./IConfigDimension";

export interface IDimension extends IProduct<IConfigDimension> {
  ExtremeLow: number;
  ExtremeHigh: number;

  Accelerators: IAcceleration[];
}
