import { IConfigItem } from "../continuum/item/IConfigItem";
import { IDescriptorProduct } from "./IDescriptorProduct";

export interface ICreationArgument {
  Coordinates: number[];
  Descriptor: IDescriptorProduct<IConfigItem>;
}
