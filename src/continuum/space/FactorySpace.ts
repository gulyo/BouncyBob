import { Factory } from "../../base/Factory";
import { IFactory } from "../../base/IFactory";
import { IConfigSpace } from "./IConfigSpace";
import { ISpace } from "./ISpace";

class FactoryClass extends Factory<IConfigSpace, ISpace> {}

export const FactorySpace: IFactory<IConfigSpace, ISpace> = new FactoryClass();
