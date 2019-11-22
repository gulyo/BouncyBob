import IProduct from "../base/IProduct";
import IProductConfig from "../base/IProductConfig";

export default interface IVisualizer<TConfig extends IProductConfig> extends IProduct<TConfig> {
  Show(): void;

  Hide(): void;
}
