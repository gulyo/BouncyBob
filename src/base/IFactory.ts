import { IProduct } from "./IProduct";

/**
 * Generic instance creator
 */
export interface IFactory<TProduct extends IProduct> {
  /**
   * Registers a new function to provide an instance associated with the name.
   * Note: To make testing easier I suggest enabling to override providers
   * @param name
   * @param providerFn
   */
  Register(name: string, providerFn: new () => TProduct): void;

  Provide(name: string): TProduct;
}
