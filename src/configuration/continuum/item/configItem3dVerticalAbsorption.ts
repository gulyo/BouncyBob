import { appConfig } from "../../../appConfig";
import { NameAbsorption } from "../../../continuum/absorption";
import { IConfigItem } from "../../../continuum/item/IConfigItem";
import { NameShape } from "../../../visualization/shape";
import { configShapeDomBall } from "../../visulazitaion/shape/configShapeDomBall";
import { configAbsorptionFullElastic } from "../absorption/configAbsorptionFullElastic";
import { configAbsorptionLinear } from "../absorption/configAbsorptionLinear";

export const configItem3dVerticalAbsorption: IConfigItem = {
  Absorptions: [
    { ClassName: NameAbsorption.FULL_ELASTIC, Config: configAbsorptionFullElastic },
    { ClassName: NameAbsorption.LINEAR, Config: configAbsorptionLinear },
    { ClassName: NameAbsorption.FULL_ELASTIC, Config: configAbsorptionFullElastic },
  ],
  Visualizer: {
    ClassName: NameShape.DOM_BALL_3D,
    Config: configShapeDomBall,
  },
  VelocityInterval: [
    { Low: -250, High: 250 },
    { Low: -500, High: 500 },
    { Low: -7, High: 7 },
  ],
  VelocityMinimum: [
    Number.NEGATIVE_INFINITY,
    configAbsorptionLinear.Constants.Coefficient * (1000 / appConfig.timeStep) * 1.1,
    Number.NEGATIVE_INFINITY,
  ],
};
