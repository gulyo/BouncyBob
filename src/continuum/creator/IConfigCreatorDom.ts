import { IInterval } from "../../util/IInterval";
import { IConfigCreator } from "./IConfigCreator";

export interface IConfigCreatorDom extends IConfigCreator {
  ElementSelector: string;
  ExtraCoordinates: IInterval[];
}
