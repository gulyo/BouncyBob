import { IConfigProduct } from "./IConfigProduct";
import { IProduct } from "./IProduct";

export interface IProductReusable<TConfig extends IConfigProduct = IConfigProduct> extends IProduct<TConfig> {
  readonly IsActive: boolean;

  Activate(deActivator: () => void): void;

  Deactivate(): void;
}
