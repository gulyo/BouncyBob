import { appConfig } from "../../../appConfig";
import { NameAbsorption } from "../../../continuum/absorption";
import { IConfigItem } from "../../../continuum/item/IConfigItem";
import { NameShape } from "../../../visualization/shape";
import { configShapeLogBall } from "../../visulazitaion/shape/configShapeLogBall";
import { configAbsorptionFullElastic } from "../absorption/configAbsorptionFullElastic";
import { configAbsorptionLinear } from "../absorption/configAbsorptionLinear";

export const configItemLog: IConfigItem = {
  Absorptions: [
    { ClassName: NameAbsorption.FULL_ELASTIC, Config: configAbsorptionFullElastic },
    { ClassName: NameAbsorption.LINEAR, Config: configAbsorptionLinear },
    { ClassName: NameAbsorption.LINEAR, Config: configAbsorptionLinear },
    { ClassName: NameAbsorption.FULL_ELASTIC, Config: configAbsorptionFullElastic },
    { ClassName: NameAbsorption.LINEAR, Config: configAbsorptionLinear },
  ],
  Visualizer: {
    ClassName: NameShape.LOG_BALL,
    Config: configShapeLogBall,
  },
  VelocityInterval: [
    { Low: -250, High: 250 },
    { Low: -500, High: 500 },
    { Low: -250, High: 250 },
    { Low: -500, High: 500 },
    { Low: -250, High: 250 },
  ],
  VelocityMinimum: [
    Number.NEGATIVE_INFINITY,
    configAbsorptionLinear.Constants.Coefficient * (1000 / appConfig.timeStep) * 1.1,
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    configAbsorptionLinear.Constants.Coefficient * (1000 / appConfig.timeStep) * 1.1,
  ],
};
