import IConfigProduct from "../../base/IConfigProduct";
import IConfigDimension from "../dimension/IConfigDimension";

export default interface IConfigSpace extends IConfigProduct {
  Dimension: {
    [key: string]: IConfigDimension;
  };
}
