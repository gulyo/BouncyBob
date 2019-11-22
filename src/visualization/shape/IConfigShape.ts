import IConfigProduct from "../../base/IConfigProduct";

export default interface IConfigShape extends IConfigProduct {
  Coordinates: {
    [dimensionId: string]: number;
  };
}
