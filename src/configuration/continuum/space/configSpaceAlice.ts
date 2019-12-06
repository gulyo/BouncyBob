import { NameCreator } from "../../../continuum/creator";
import { NameDimension } from "../../../continuum/dimension";
import { IConfigSpace } from "../../../continuum/space/IConfigSpace";
import { NameWorld } from "../../../visualization/world";
import { configWorldDom2d } from "../../visulazitaion/world/configWorldDom2d";
import { configCreatorDomAlice } from "../creator/configCreatorDomAlice";
import { configDimensionGravity } from "../dimension/configDimensionGravity";
import { configDimensionSimple } from "../dimension/configDimensionSimple";

export const configSpaceAlice: IConfigSpace = {
  Dimensions: [
    { ClassName: NameDimension.EUCLIDEAN, Config: configDimensionSimple },
    { ClassName: NameDimension.EUCLIDEAN, Config: configDimensionGravity },
  ],
  Visualizer: { ClassName: NameWorld.ALICE, Config: configWorldDom2d },
  Creators: [{ ClassName: NameCreator.DOM_CLICK, Config: configCreatorDomAlice }],
};
