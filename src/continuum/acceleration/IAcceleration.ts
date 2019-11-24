import { IProduct } from "../../base/IProduct";
import { IConfigAcceleration } from "./IConfigAcceleration";

export interface IAcceleration extends IProduct<IConfigAcceleration> {
  UpdateVelocity(velocity: number): number;
}
