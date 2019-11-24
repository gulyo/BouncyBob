import AccelerationGravity from "./AccelerationGravity";
import FactoryAcceleration from "./FactoryAcceleration";

export enum NameAcceleration {
  GRAVITY = "gravity",
}

FactoryAcceleration.Register(NameAcceleration.GRAVITY, AccelerationGravity);
