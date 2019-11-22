import IConfigProduct from "../../base/IConfigProduct";

/**
 * Describes a dimension
 */
export default interface IConfigDimension extends IConfigProduct {
  ExtremeLow: number;
  ExtremeHigh: number;
}
