import { IDescriptorProduct } from "../base/IDescriptorProduct";
import { IConfigSpace } from "../continuum/space/IConfigSpace";

export interface IButtonDescriptor {
  Text: string;
  Descriptor: IDescriptorProduct<IConfigSpace>;
}
