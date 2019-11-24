import { IProduct } from "../../base/IProduct";
import { IEvent } from "../../util/event/IEvent";
import { IDimension } from "../dimension/IDimension";
import { IConfigSpace } from "./IConfigSpace";

export interface ISpace extends IProduct<IConfigSpace> {
  readonly Dimensions: IDimension[];

  readonly OnResize: IEvent;
}
