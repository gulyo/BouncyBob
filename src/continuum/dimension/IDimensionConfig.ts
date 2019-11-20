import IProductConfig from "../../base/IProductConfig";

/**
 * Describes a dimension
 */
export default interface IDimensionConfig extends IProductConfig {
  ExtremeLow: number;
  ExtremeHigh: number;
}
