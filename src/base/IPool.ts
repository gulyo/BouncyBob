import IConfigProduct from "./IConfigProduct";
import IFactory from "./IFactory";
import IProductReusable from "./IProductReusable";

/**
 * A Factory that reuses instances
 */
export default interface IPool<TConfig extends IConfigProduct, TProduct extends IProductReusable<TConfig>>
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
