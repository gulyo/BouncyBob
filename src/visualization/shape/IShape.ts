import { IVisualizer } from "../IVisualizer";
import { IConfigShape } from "./IConfigShape";

export interface IShape<TConfig extends IConfigShape = IConfigShape> extends IVisualizer<TConfig> {}
