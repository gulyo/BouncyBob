import { IConfigProduct } from "./IConfigProduct";

export interface IDescriptorProduct<TConfig extends IConfigProduct> {
  ClassName: string;
  Config: TConfig;
}
