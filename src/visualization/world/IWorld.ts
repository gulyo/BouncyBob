import { IInterval } from "../../util/IInterval";
import { IVisualizer } from "../IVisualizer";
import { IConfigWorld } from "./IConfigWorld";

export interface IWorld extends IVisualizer<IConfigWorld> {
  readonly Extremes: IInterval[];
}
