import { IConfigProduct } from "./IConfigProduct";
import { IFactory } from "./IFactory";
import { IProductReusable } from "./IProductReusable";

/**
 * A Factory that reuses instances
 */
export interface IPool<TProduct extends IProductReusable<IConfigProduct>> extends IFactory<TProduct> {
  /**
   * Maximum item count
   */
  Limit: number;
  /**
   * Indicates if there was free capacity
   */
  readonly CanProvide: boolean;
}
