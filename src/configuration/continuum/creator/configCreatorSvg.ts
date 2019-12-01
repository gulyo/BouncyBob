import { appConfig } from "../../../appConfig";
import { IConfigCreatorDom } from "../../../continuum/creator/IConfigCreatorDom";
import { NameItem } from "../../../continuum/item";
import { configItem2dVerticalAbsorptionSvg } from "../item/configItem2dVerticalAbsorptionSvg";

export const configCreatorSvg: IConfigCreatorDom = {
  ItemDescriptors: [
    {
      ClassName: NameItem.GENERIC,
      Config: configItem2dVerticalAbsorptionSvg,
    },
  ],
  ElementSelector: appConfig.domWorldElementSelector,
  ExtraCoordinates: [],
};
