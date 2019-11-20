import IProduct from "../../base/IProduct";

export default interface IAcceleration extends IProduct {
  UpdateVelocity(velocity: number): number;
}
