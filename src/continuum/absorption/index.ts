import { Absorption } from "./Absorption";
import { AbsorptionLinear } from "./AbsorptionLinear";
import { FactoryAbsorption } from "./FactoryAbsorption";

export enum NameAbsorption {
  FULL_ELASTIC = "FullElastic",
  LINEAR = "Linear",
}

FactoryAbsorption.Register(NameAbsorption.FULL_ELASTIC, Absorption);
FactoryAbsorption.Register(NameAbsorption.LINEAR, AbsorptionLinear);
