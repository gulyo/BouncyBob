import { appConfig } from "../../../appConfig";
import { IConfigCreatorDom } from "../../../continuum/creator/IConfigCreatorDom";
import { NameItem } from "../../../continuum/item";
import { configItem2dVerticalAbsorption } from "../item/configItem2dVerticalAbsorption";

export const configCreatorDom: IConfigCreatorDom = {
  ItemDescriptors: [
    {
      ClassName: NameItem.GENERIC,
      Config: configItem2dVerticalAbsorption,
    },
  ],
  ElementSelector: appConfig.domWorldElementSelector,
};
