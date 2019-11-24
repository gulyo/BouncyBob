import IConfigProduct from "../../base/IConfigProduct";
import IConfigDimension from "../dimension/IConfigDimension";

export default interface IConfigSpace extends IConfigProduct {
  Dimensions: Array<{ className: string; config: IConfigDimension }>;
}
