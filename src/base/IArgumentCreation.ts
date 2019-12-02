import { IConfigItem } from "../continuum/item/IConfigItem";
import { IDescriptorProduct } from "./IDescriptorProduct";

export interface IArgumentCreation {
  Coordinates: number[];
  Descriptor: IDescriptorProduct<IConfigItem>;
}
