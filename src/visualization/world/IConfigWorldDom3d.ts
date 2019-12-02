import { IInterval } from "../../util/IInterval";
import { IConfigWorldDom2d } from "./IConfigWorldDom2d";

export interface IConfigWorldDom3d extends IConfigWorldDom2d {
  DepthInterval: IInterval;
}
