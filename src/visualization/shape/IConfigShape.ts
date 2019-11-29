import { IConfigProduct } from "../../base/IConfigProduct";

export interface IConfigShape extends IConfigProduct {
  Constants: { [key: string]: any };
}
