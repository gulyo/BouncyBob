import { IConfigProduct } from "../../base/IConfigProduct";
import { IDescriptorProduct } from "../../base/IDescriptorProduct";
import { IInterval } from "../../util/IInterval";
import { IConfigShape } from "../../visualization/shape/IConfigShape";
import { IConfigAbsorption } from "../absorption/IConfigAbsorption";

export interface IConfigItem extends IConfigProduct {
  Absorptions: Array<IDescriptorProduct<IConfigAbsorption>>;
  Visualizer: IDescriptorProduct<IConfigShape>;
  VelocityInterval: IInterval[];
}
