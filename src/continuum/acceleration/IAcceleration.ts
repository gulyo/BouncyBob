import { IProduct } from "../../base/IProduct";
import { IVelocityModifier } from "../../base/IVelocityModifier";
import { IConfigAcceleration } from "./IConfigAcceleration";

export interface IAcceleration extends IProduct<IConfigAcceleration>, IVelocityModifier {}
