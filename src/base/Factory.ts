import { IFactory } from "./IFactory";
import { IProduct } from "./IProduct";

type ProviderFn<TProduct> = new () => TProduct;

export abstract class Factory<TProduct extends IProduct> implements IFactory<TProduct> {
  protected providers: Map<string, ProviderFn<TProduct>> = new Map<string, ProviderFn<TProduct>>();

  public Provide(name: string): TProduct {
    if (!this.providers.has(name)) {
      throw new Error(`Unregistered provider: ${name}`);
    }
    return new (this.providers.get(name))();
  }

  public Register(name: string, providerFn: ProviderFn<TProduct>): void {
    this.providers.set(name, providerFn);
  }
}
