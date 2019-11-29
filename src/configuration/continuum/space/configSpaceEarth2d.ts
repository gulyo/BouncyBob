import { NameCreator } from "../../../continuum/creator";
import { IConfigSpace } from "../../../continuum/space/IConfigSpace";
import { NameWorld } from "../../../visualization/world";
import { configWorldDom2d } from "../../visulazitaion/world/confirWorldDom2d";
import { configCreatorDom } from "../creator/configCreatorDom";

export const configSpaceEarth2d: IConfigSpace = {
  Dimensions: [],
  Visualizer: { ClassName: NameWorld.DOM2D, Config: configWorldDom2d },
  Creators: [{ ClassName: NameCreator.DOM_CLICK, Config: configCreatorDom }],
};
