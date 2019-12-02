import { NameCreator } from "../../../continuum/creator";
import { NameDimension } from "../../../continuum/dimension";
import { IConfigSpace } from "../../../continuum/space/IConfigSpace";
import { NameWorld } from "../../../visualization/world";
import { configWorldLog } from "../../visulazitaion/world/configWorldLog";
import { configCreatorLog } from "../creator/configCreatorLog";
import { configDimensionGravity } from "../dimension/configDimensionGravity";
import { configDimensionSimple } from "../dimension/configDimensionSimple";

export const configSpaceLog: IConfigSpace = {
  Dimensions: [
    { ClassName: NameDimension.EUCLIDEAN, Config: configDimensionSimple },
    { ClassName: NameDimension.EUCLIDEAN, Config: configDimensionGravity },
    { ClassName: NameDimension.EUCLIDEAN, Config: configDimensionGravity },
    { ClassName: NameDimension.EUCLIDEAN, Config: configDimensionSimple },
    { ClassName: NameDimension.EUCLIDEAN, Config: configDimensionGravity },
  ],
  Visualizer: { ClassName: NameWorld.LOG, Config: configWorldLog },
  Creators: [{ ClassName: NameCreator.DOM_CLICK, Config: configCreatorLog }],
};
