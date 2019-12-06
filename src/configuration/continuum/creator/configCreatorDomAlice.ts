import { appConfig } from "../../../appConfig";
import { IConfigCreatorDom } from "../../../continuum/creator/IConfigCreatorDom";
import { NameItem } from "../../../continuum/item";
import { configItem2dAlice } from "../item/configItem2dAlice";

export const configCreatorDomAlice: IConfigCreatorDom = {
  ItemDescriptors: [
    {
      ClassName: NameItem.GENERIC,
      Config: configItem2dAlice,
    },
  ],
  ElementSelector: appConfig.domWorldElementSelector,
  ExtraCoordinates: [],
};
