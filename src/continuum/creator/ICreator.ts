import { IProduct } from "../../base/IProduct";
import { IEvent } from "../../util/event/IEvent";
import { IArgumentEventCreation } from "./IArgumentEventCreation";
import { IConfigCreator } from "./IConfigCreator";

export interface ICreator extends IProduct<IConfigCreator> {
  OnCreation: IEvent<IArgumentEventCreation>;
}
