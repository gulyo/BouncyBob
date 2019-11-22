import IFactory from "./IFactory";
import IProductConfig from "./IProductConfig";
import IProductReusable from "./IProductReusable";

/**
 * A Factory that reuses instances
 */
export default interface IPool<TConfig extends IProductConfig, TProduct extends IProductReusable<TConfig>>
  extends IFactory<TConfig, TProduct> {
  /**
   * Maximum item count
   */
  Limit: number;
  /**
   * Indicates if there was free capacity
   */
  readonly CanProvide: boolean;
}
