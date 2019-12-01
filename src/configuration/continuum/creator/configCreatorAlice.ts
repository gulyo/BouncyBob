import { appConfig } from "../../../appConfig";
import { IConfigCreatorDom } from "../../../continuum/creator/IConfigCreatorDom";
import { NameItem } from "../../../continuum/item";
import { configItemAlice } from "../item/configItemAlice";

export const configCreatorAlice: IConfigCreatorDom = {
  ItemDescriptors: [
    {
      ClassName: NameItem.GENERIC,
      Config: configItemAlice,
    },
  ],
  ElementSelector: appConfig.domWorldElementSelector,
  ExtraCoordinates: [],
};
