import { IProduct } from "../../base/IProduct";
import { IEvent } from "../../util/event/IEvent";
import { IConfigDimension } from "./IConfigDimension";

export interface IDimension extends IProduct<IConfigDimension> {
  readonly ExtremeLow: number;
  readonly ExtremeHigh: number;

  readonly OnResize: IEvent;
}
