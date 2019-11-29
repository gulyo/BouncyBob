import { IConfigProduct } from "../../base/IConfigProduct";

export interface IConfigAbsorption extends IConfigProduct {
  Constants: {
    [key: string]: number;
  };
}
