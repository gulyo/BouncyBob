import IProductConfig from "../../base/IProductConfig";
import IDimensionConfig from "../dimension/IDimensionConfig";

export default interface ISpaceConfig extends IProductConfig {
  Dimension: {
    [key: string]: IDimensionConfig;
  };
}
