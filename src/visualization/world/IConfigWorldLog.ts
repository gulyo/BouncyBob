import { IInterval } from "../../util/IInterval";
import { IConfigWorld } from "./IConfigWorld";

export interface IConfigWorldLog extends IConfigWorld {
  Size: IInterval[];
}
