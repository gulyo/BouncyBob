import { Factory } from "../../base/Factory";
import { IFactory } from "../../base/IFactory";
import { IDimension } from "./IDimension";

class FactoryClass extends Factory<IDimension> {}

export const FactoryDimension: IFactory<IDimension> = new FactoryClass();
