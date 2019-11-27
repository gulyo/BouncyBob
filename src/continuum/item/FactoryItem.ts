import { Factory } from "../../base/Factory";
import { IFactory } from "../../base/IFactory";
import { IItem } from "./IItem";

class FactoryClass extends Factory<IItem> {}

export const FactoryItem: IFactory<IItem> = new FactoryClass();
