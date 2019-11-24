import { IConfigProduct } from "../../base/IConfigProduct";

export interface IConfigShape extends IConfigProduct {
  Coordinates: {
    [dimensionId: string]: number;
  };
}
