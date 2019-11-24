import { IConfigProduct } from "../../base/IConfigProduct";
import { IDescriptorProduct } from "../../base/IDescriptorProduct";
import { IConfigAcceleration } from "../acceleration/IConfigAcceleration";

/**
 * Describes a dimension
 */
export interface IConfigDimension extends IConfigProduct {
  Accelerators: Array<IDescriptorProduct<IConfigAcceleration>>;
}
