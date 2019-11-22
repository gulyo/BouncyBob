import Factory from "../../base/Factory";
import IConfigDimension from "./IConfigDimension";
import IDimension from "./IDimension";

class FactoryClass extends Factory<IConfigDimension, IDimension> {
}

export default new FactoryClass();
