import { IConfigProduct } from "../base/IConfigProduct";
import { IProduct } from "../base/IProduct";

export interface IVisualizer<TConfig extends IConfigProduct> extends IProduct<TConfig> {
  Element: JQuery;

  Show(): void;
  Hide(): void;
}
