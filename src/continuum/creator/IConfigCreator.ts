import { IConfigProduct } from "../../base/IConfigProduct";
import { IDescriptorProduct } from "../../base/IDescriptorProduct";
import { IConfigItem } from "../item/IConfigItem";

export interface IConfigCreator extends IConfigProduct {
  ItemDescriptors: Array<IDescriptorProduct<IConfigItem>>;
}
