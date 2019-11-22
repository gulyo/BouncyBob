import IProduct from "../../base/IProduct";
import IEvent from "../../util/event/IEvent";
import IDimension from "../dimension/IDimension";
import IConfigSpace from "./IConfigSpace";

export default interface ISpace extends IProduct<IConfigSpace> {
  readonly Dimension: {
    [key: string]: IDimension;
  };

  readonly OnResize: IEvent;
}
