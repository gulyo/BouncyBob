import IProduct from "./IProduct";
import IProductConfig from "./IProductConfig";

/**
 * Generic instance creator
 */
export default interface IFactory<TConfig extends IProductConfig, TProduct extends IProduct<TConfig>> {
  /**
   * Registers a new function to provide an instance associated with the name.
   * Note: To make testing easier I suggest enabling to override providers
   * @param name
   * @param providerFn
   */
  Register(name: string, providerFn: new () => TProduct): void;

  Provide(name: string): TProduct;
}
