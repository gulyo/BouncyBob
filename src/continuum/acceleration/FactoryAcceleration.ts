import Factory from "../../base/Factory";
import IAcceleration from "./IAcceleration";
import IConfigAcceleration from "./IConfigAcceleration";

class FactoryClass extends Factory<IConfigAcceleration, IAcceleration> {}

export default new FactoryClass();
