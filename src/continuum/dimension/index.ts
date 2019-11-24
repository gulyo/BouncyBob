import Dimension from "./Dimension";
import "./FactoryDimension";
import FactoryDimension from "./FactoryDimension";

export enum NameDimension {
  EUCLIDEAN = "Euclidean",
}

FactoryDimension.Register(NameDimension.EUCLIDEAN, Dimension);
