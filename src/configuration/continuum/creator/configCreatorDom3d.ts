import { appConfig } from "../../../appConfig";
import { IConfigCreatorDom } from "../../../continuum/creator/IConfigCreatorDom";
import { NameItem } from "../../../continuum/item";
import { configWorldDom3d } from "../../visulazitaion/world/confirWorldDom3d";
import { configItem3dVerticalAbsorption } from "../item/configItem3dVerticalAbsorption";

export const configCreatorDom3d: IConfigCreatorDom = {
  ItemDescriptors: [
    {
      ClassName: NameItem.GENERIC,
      Config: configItem3dVerticalAbsorption,
    },
  ],
  ElementSelector: appConfig.domWorldElementSelector,
  ExtraCoordinates: [configWorldDom3d.DepthInterval],
};
