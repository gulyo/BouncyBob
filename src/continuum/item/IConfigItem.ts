import { IConfigProduct } from "../../base/IConfigProduct";
import { IDescriptorProduct } from "../../base/IDescriptorProduct";
import { IConfigAbsorption } from "../absorption/IConfigAbsorption";

export interface IConfigItem extends IConfigProduct {
  Absorptions: Array<IDescriptorProduct<IConfigAbsorption>>;
}
