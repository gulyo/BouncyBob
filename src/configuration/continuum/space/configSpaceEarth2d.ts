import { IConfigSpace } from "../../../continuum/space/IConfigSpace";
import { NameWorld } from "../../../visualization/world";
import { configWorldDom2d } from "../../visulazitaion/world/confirWorldDom2d";

export const configSpaceEarth2d: IConfigSpace = {
  Dimensions: [],
  Visualizer: { ClassName: NameWorld.DOM2D, Config: configWorldDom2d },
};
