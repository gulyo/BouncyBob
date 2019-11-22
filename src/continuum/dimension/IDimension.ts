import IProduct from "../../base/IProduct";
import IEvent from "../../util/event/IEvent";
import IDimensionConfig from "./IDimensionConfig";

export default interface IDimension extends IProduct<IDimensionConfig> {
  readonly ExtremeLow: number;
  readonly ExtremeHigh: number;

  readonly OnResize: IEvent;
}
