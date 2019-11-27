import { IConfigAbsorption } from "./IConfigAbsorption";

export interface IConfigAbsorptionLinear extends IConfigAbsorption {
  Constants: {
    Coefficient: number;
  };
}
