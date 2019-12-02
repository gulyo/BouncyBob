import { IConfigProduct } from "../../base/IConfigProduct";

export interface IConfigAcceleration extends IConfigProduct {
  Constants: {
    [key: string]: number;
  };
}
