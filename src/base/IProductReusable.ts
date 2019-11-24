import { IProduct } from "./IProduct";

export interface IProductReusable<TConfig> extends IProduct<TConfig> {
  readonly IsActive: boolean;

  Activate(deActivator: () => void): void;

  Deactivate(): void;
}
