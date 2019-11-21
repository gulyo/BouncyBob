import IProductConfig from "../../base/IProductConfig";

export default interface IShapeConfig extends IProductConfig {
  Coordinates: {
    [dimensionId: string]: number;
  };
}
