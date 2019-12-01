import { NameCreator } from "../../../continuum/creator";
import { NameDimension } from "../../../continuum/dimension";
import { IConfigSpace } from "../../../continuum/space/IConfigSpace";
import { NameWorld } from "../../../visualization/world";
import { configWorldDom2d } from "../../visulazitaion/world/confirWorldDom2d";
import { configCreatorSvg } from "../creator/configCreatorSvg";
import { configDimensionGravity } from "../dimension/configDimensionGravity";
import { configDimensionSimple } from "../dimension/configDimensionSimple";

export const configSpaceEarthSvg: IConfigSpace = {
  Dimensions: [
    { ClassName: NameDimension.EUCLIDEAN, Config: configDimensionSimple },
    { ClassName: NameDimension.EUCLIDEAN, Config: configDimensionGravity },
  ],
  Visualizer: { ClassName: NameWorld.DOMSVG, Config: configWorldDom2d },
  Creators: [{ ClassName: NameCreator.DOM_CLICK, Config: configCreatorSvg }],
};
