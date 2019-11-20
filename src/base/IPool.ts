import IFactory from "./IFactory";
import IProduct from "./IProduct";

/**
 * A Factory that reuses instances
 */
export default interface IPool<TProduct extends IProduct> extends IFactory<TProduct> {
  Limit: number;
}
