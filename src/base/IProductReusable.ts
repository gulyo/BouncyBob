import IProduct from "./IProduct";

export default interface IProductReusable<TConfig> extends IProduct<TConfig> {
  readonly IsActive: boolean;
  Activate(deActivator: () => void): void;
  Deactivate(): void;
}
