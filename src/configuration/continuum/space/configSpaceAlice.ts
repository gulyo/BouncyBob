import { NameCreator } from "../../../continuum/creator";
import { NameDimension } from "../../../continuum/dimension";
import { IConfigSpace } from "../../../continuum/space/IConfigSpace";
import { NameWorld } from "../../../visualization/world";
import { configWorldAlice } from "../../visulazitaion/world/configWorldAlice";
import { configCreatorAlice } from "../creator/configCreatorAlice";
import { configDimensionGravity } from "../dimension/configDimensionGravity";
import { configDimensionSimple } from "../dimension/configDimensionSimple";

export const configSpaceAlice: IConfigSpace = {
  Dimensions: [
    { ClassName: NameDimension.EUCLIDEAN, Config: configDimensionSimple },
    { ClassName: NameDimension.EUCLIDEAN, Config: configDimensionGravity },
  ],
  Visualizer: { ClassName: NameWorld.ALICE, Config: configWorldAlice },
  Creators: [{ ClassName: NameCreator.DOM_CLICK, Config: configCreatorAlice }],
};
