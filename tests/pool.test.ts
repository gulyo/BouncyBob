import { DummyPool } from "./class/DummyPool";
import { DummyProduct } from "./class/DummyProduct";

let pool: DummyPool;

describe("Pool testing", () => {
  beforeEach(() => {
    pool = new DummyPool();
    pool.Register("dummy", DummyProduct);
  });

  test("Provide", () => {
    const product: DummyProduct = pool.Provide("dummy");
    expect(product).toBeInstanceOf(DummyProduct);
  });

  test("Unregistered Product", () => {
    const name: string = "SomeUnregisteredClass";
    expect(() => pool.Provide(name)).toThrowError(`Unregistered provider: ${name}`);
  });

  test("Set Limit", () => {
    pool.Limit = 3;
    expect(pool.Limit).toEqual(3);
  });

  test("Limit minimum", () => {
    const limit = 0;
    expect(() => (pool.Limit = limit)).toThrowError(`Limit minimum is 1, received value: ${limit}`);
  });

  test("Limit after Provide", () => {
    const limit = 5;
    pool.Provide("dummy");
    expect(() => (pool.Limit = limit)).toThrowError(`Pool limit can only be set before the first use of Provide`);
  });

  test("Can Provide", () => {
    pool.Limit = 2;
    pool.Provide("dummy");
    expect(pool.CanProvide).toEqual(true);
    const product = pool.Provide("dummy");
    expect(pool.CanProvide).toEqual(false);
    product.Deactivate();
    expect(pool.CanProvide).toEqual(true);
  });

  test("Limit reached", () => {
    pool.Limit = 2;
    pool.Provide("dummy");
    pool.Provide("dummy");
    expect(() => pool.Provide("dummy")).toThrowError("This Pool cannot provide more Product, deactivate some");
  });
});
