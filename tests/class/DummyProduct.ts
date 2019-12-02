import { IConfigProduct } from "../../src/base/IConfigProduct";
import { ProductReusable } from "../../src/base/ProductReusable";

export class DummyProduct extends ProductReusable {
  public Init(config: IConfigProduct): void {
    // Dummy classes do nothing
  }
}
