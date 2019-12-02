import { appConfig } from "../../../appConfig";
import { NameAbsorption } from "../../../continuum/absorption";
import { IConfigItem } from "../../../continuum/item/IConfigItem";
import { NameShape } from "../../../visualization/shape";
import { configShapeDomBall3d } from "../../visulazitaion/shape/configShapeDomBall3d";
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
    Config: configShapeDomBall3d,
  },
  VelocityInterval: [
    { Low: -250, High: 250 },
    { Low: -500, High: 500 },
    { Low: -2000, High: 2000 },
  ],
  VelocityMinimum: [
    Number.NEGATIVE_INFINITY,
    configAbsorptionLinear.Constants.Coefficient * (1000 / appConfig.timeStep) * 1.1,
    Number.NEGATIVE_INFINITY,
  ],
};
