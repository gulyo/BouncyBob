import { Factory } from "../../base/Factory";
import { IFactory } from "../../base/IFactory";
import { IConfigDimension } from "./IConfigDimension";
import { IDimension } from "./IDimension";

class FactoryClass extends Factory<IConfigDimension, IDimension> {}

export const FactoryDimension: IFactory<IConfigDimension, IDimension> = new FactoryClass();
