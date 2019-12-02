import { DummyFactory } from "./class/DummyFactory";
import { DummyProduct } from "./class/DummyProduct";

let factory: DummyFactory;

describe("Factory testing", () => {
  beforeEach(() => {
    factory = new DummyFactory();
    factory.Register("dummy", DummyProduct);
  });

  test("Provide", () => {
    const product: DummyProduct = factory.Provide("dummy");
    expect(product).toBeInstanceOf(DummyProduct);
  });

  test("Unregistered Product", () => {
    const name: string = "SomeUnregisteredClass";
    expect(() => factory.Provide(name)).toThrowError(`Unregistered provider: ${name}`);
  });
});
