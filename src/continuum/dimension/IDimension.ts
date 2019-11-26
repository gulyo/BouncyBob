import { IProduct } from "../../base/IProduct";
import { IConfigDimension } from "./IConfigDimension";

export interface IDimension extends IProduct<IConfigDimension> {
  readonly ExtremeLow: number;
  readonly ExtremeHigh: number;
}
