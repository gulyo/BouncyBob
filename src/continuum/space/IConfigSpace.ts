import { IConfigProduct } from "../../base/IConfigProduct";
import { IDescriptorProduct } from "../../base/IDescriptorProduct";
import { IConfigWorld } from "../../visualization/world/IConfigWorld";
import { IConfigCreator } from "../creator/IConfigCreator";
import { IConfigDimension } from "../dimension/IConfigDimension";

export interface IConfigSpace extends IConfigProduct {
  Dimensions: Array<IDescriptorProduct<IConfigDimension>>;
  Visualizer: IDescriptorProduct<IConfigWorld>;
  Creators: Array<IDescriptorProduct<IConfigCreator>>;
}
