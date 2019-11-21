import IEvent from "../../base/IEvent";
import IProduct from "../../base/IProduct";
import IDimensionConfig from "./IDimensionConfig";

export default interface IDimension extends IProduct<IDimensionConfig> {
  readonly ExtremeLow: number;
  readonly ExtremeHigh: number;

  readonly OnResize: IEvent;
}
