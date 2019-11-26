import { FactoryWorld } from "./FactoryWorld";
import { WorldDom2d } from "./WorldDom2d";

export enum NameWorld {
  DOM2D = "Dom2d",
}

FactoryWorld.Register(NameWorld.DOM2D, WorldDom2d);
