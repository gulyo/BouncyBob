import { IConfigProduct } from "../../base/IConfigProduct";
import { IDescriptorProduct } from "../../base/IDescriptorProduct";
import { IConfigWorld } from "../../visualization/world/IConfigWorld";
import { IConfigDimension } from "../dimension/IConfigDimension";

export interface IConfigSpace extends IConfigProduct {
  Dimensions: Array<IDescriptorProduct<IConfigDimension>>;
  Visualizer: IDescriptorProduct<IConfigWorld>;
}
