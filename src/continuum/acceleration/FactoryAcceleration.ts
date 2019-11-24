import { Factory } from "../../base/Factory";
import { IFactory } from "../../base/IFactory";
import { IAcceleration } from "./IAcceleration";
import { IConfigAcceleration } from "./IConfigAcceleration";

class FactoryClass extends Factory<IConfigAcceleration, IAcceleration> {}

export const FactoryAcceleration: IFactory<IConfigAcceleration, IAcceleration> = new FactoryClass();
