import { NameAbsorption } from "../../../continuum/absorption";
import { IConfigItem } from "../../../continuum/item/IConfigItem";
import { NameShape } from "../../../visualization/shape";
import { configShapeDomBall } from "../../visulazitaion/shape/configShapeDomBall";
import { configAbsorptionLinear } from "../absorption/configAbsorptionFullElastic";
import { configAbsorptionFullElastic } from "../absorption/configAbsorptionLinear";

export const configItem2dVerticalAbsorption: IConfigItem = {
  Absorptions: [
    { ClassName: NameAbsorption.FULL_ELASTIC, Config: configAbsorptionFullElastic },
    { ClassName: NameAbsorption.LINEAR, Config: configAbsorptionLinear },
  ],
  Visualizer: {
    ClassName: NameShape.DOM_BALL,
    Config: configShapeDomBall,
  },
};
