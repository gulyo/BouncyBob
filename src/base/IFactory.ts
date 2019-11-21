import IProduct from "./IProduct";

/**
 * Generic instance creator
 */
export default interface IFactory<TProduct extends IProduct> {
  Register(name: string, providerFn: new () => TProduct): void;
  Provide(name: string): TProduct;
}
