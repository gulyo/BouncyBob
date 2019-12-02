import { FactorySpace } from "./FactorySpace";
import { Space } from "./Space";

export enum NameSpace {
  EUCLIDEAN = "Euclidean",
}

FactorySpace.Register(NameSpace.EUCLIDEAN, Space);
