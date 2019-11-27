import { Factory } from "../../base/Factory";
import { IFactory } from "../../base/IFactory";
import { IConfigWorld } from "./IConfigWorld";
import { IWorld } from "./IWorld";

class FactoryClass extends Factory<IConfigWorld, IWorld> {}

export const FactoryWorld: IFactory<IConfigWorld, IWorld> = new FactoryClass();
