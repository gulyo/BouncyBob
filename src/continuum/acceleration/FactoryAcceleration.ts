import { Factory } from "../../base/Factory";
import { IFactory } from "../../base/IFactory";
import { IAcceleration } from "./IAcceleration";

class FactoryClass extends Factory<IAcceleration> {}

export const FactoryAcceleration: IFactory<IAcceleration> = new FactoryClass();
