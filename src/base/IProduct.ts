import IProductConfig from "./IProductConfig";

/**
 * Anything that could be created by a Factory
 */
export default interface IProduct<TConfig extends IProductConfig = IProductConfig> {
  /**
   * A Global Unique Unique Id is expected here, should be set by every
   * Product implementation individually
   * This projects provides a uuid() function, you might want consider
   * using it.
   */
  readonly GUId: string;
  Init(config: TConfig): void;
}
