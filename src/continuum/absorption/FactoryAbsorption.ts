import { Factory } from "../../base/Factory";
import { IFactory } from "../../base/IFactory";
import { IAbsorption } from "./IAbsorption";

class FactoryClass extends Factory<IAbsorption> {}

export const FactoryAbsorption: IFactory<IAbsorption> = new FactoryClass();
