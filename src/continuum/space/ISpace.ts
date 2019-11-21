import IEvent from "../../base/IEvent";
import IProduct from "../../base/IProduct";
import IDimension from "../dimension/IDimension";
import ISpaceConfig from "./ISpaceConfig";

export default interface ISpace extends IProduct<ISpaceConfig> {
  readonly Dimension: {
    [key: string]: IDimension;
  };

  readonly OnResize: IEvent;
}
