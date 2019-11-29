import { Factory } from "../../base/Factory";
import { IFactory } from "../../base/IFactory";
import { ICreator } from "./ICreator";

class FactoryClass extends Factory<ICreator> {}

export const FactoryCreator: IFactory<ICreator> = new FactoryClass();
