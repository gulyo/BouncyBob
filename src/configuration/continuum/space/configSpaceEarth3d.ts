import { NameCreator } from "../../../continuum/creator";
import { NameDimension } from "../../../continuum/dimension";
import { IConfigSpace } from "../../../continuum/space/IConfigSpace";
import { NameWorld } from "../../../visualization/world";
import { configWorldDom3d } from "../../visulazitaion/world/confirWorldDom3d";
import { configCreatorDom3d } from "../creator/configCreatorDom3d";
import { configDimensionGravity } from "../dimension/configDimensionGravity";
import { configDimensionSimple } from "../dimension/configDimensionSimple";

export const configSpaceEarth3d: IConfigSpace = {
  Dimensions: [
    { ClassName: NameDimension.EUCLIDEAN, Config: configDimensionSimple },
    { ClassName: NameDimension.EUCLIDEAN, Config: configDimensionGravity },
    { ClassName: NameDimension.EUCLIDEAN, Config: configDimensionSimple },
  ],
  Visualizer: { ClassName: NameWorld.DOM3D, Config: configWorldDom3d },
  Creators: [{ ClassName: NameCreator.DOM_CLICK, Config: configCreatorDom3d }],
};
