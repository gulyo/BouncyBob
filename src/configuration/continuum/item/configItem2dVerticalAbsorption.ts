import { NameAbsorption } from "../../../continuum/absorption";
import { IConfigItem } from "../../../continuum/item/IConfigItem";
import { configAbsorptionLinear } from "../absorption/configAbsorptionFullElastic";
import { configAbsorptionFullElastic } from "../absorption/configAbsorptionLinear";

export const configItem2dVerticalAbsorption: IConfigItem = {
  Absorptions: [
    { ClassName: NameAbsorption.FULL_ELASTIC, Config: configAbsorptionFullElastic },
    { ClassName: NameAbsorption.LINEAR, Config: configAbsorptionLinear },
  ],
};
