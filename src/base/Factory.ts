import IFactory from "./IFactory";
import IProduct from "./IProduct";

type ProviderFn<TProduct> = new () => TProduct;

export default abstract class Factory<TConfig, TProduct extends IProduct<TConfig>>
  implements IFactory<TConfig, TProduct> {
  protected providers: Map<string, ProviderFn<TProduct>>;

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
