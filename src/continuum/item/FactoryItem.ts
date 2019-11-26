import { Factory } from "../../base/Factory";
import { IFactory } from "../../base/IFactory";
import { IConfigItem } from "./IConfigItem";
import { IItem } from "./IItem";

class FactoryClass extends Factory<IConfigItem, IItem> {}

export const FactoryItem: IFactory<IConfigItem, IItem> = new FactoryClass();
