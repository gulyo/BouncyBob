import IProductConfig from "./IProductConfig";

/**
 * Anything that could be created by a Factory
 */
export default interface IProduct<TConfig extends IProductConfig = IProductConfig> {
  Init(config: TConfig): void;
}
