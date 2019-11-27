import { Factory } from "../../base/Factory";
import { IFactory } from "../../base/IFactory";
import { IWorld } from "./IWorld";

class FactoryClass extends Factory<IWorld> {}

export const FactoryWorld: IFactory<IWorld> = new FactoryClass();
