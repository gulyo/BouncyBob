import { Factory } from "../../base/Factory";
import { IFactory } from "../../base/IFactory";
import { ISpace } from "./ISpace";

class FactoryClass extends Factory<ISpace> {}

export const FactorySpace: IFactory<ISpace> = new FactoryClass();
