import { FactoryWorld } from "./FactoryWorld";
import { WorldDom2d } from "./WorldDom2d";
import { WorldDom3d } from "./WorldDom3d";

export enum NameWorld {
  DOM2D = "Dom2d",
  DOM3D = "Dom3d",
}

FactoryWorld.Register(NameWorld.DOM2D, WorldDom2d);
FactoryWorld.Register(NameWorld.DOM3D, WorldDom3d);
