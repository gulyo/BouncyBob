import { Factory } from "../../base/Factory";
import { IFactory } from "../../base/IFactory";
import { IAbsorption } from "./IAbsorption";
import { IConfigAbsorption } from "./IConfigAbsorption";

class FactoryClass extends Factory<IConfigAbsorption, IAbsorption> {}

export const FactoryAbsorption: IFactory<IConfigAbsorption, IAbsorption> = new FactoryClass();
