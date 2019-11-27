import { IProduct } from "../../base/IProduct";
import { IVelocityModifier } from "../../base/IVelocityModifier";
import { IConfigAbsorption } from "./IConfigAbsorption";

export interface IAbsorption extends IProduct<IConfigAbsorption>, IVelocityModifier {}
