import { appConfig } from "../../../appConfig";
import { NameAbsorption } from "../../../continuum/absorption";
import { IConfigItem } from "../../../continuum/item/IConfigItem";
import { NameShape } from "../../../visualization/shape";
import { configShapeAliceBall } from "../../visulazitaion/shape/configShapeAliceBall";
import { configAbsorptionLinear } from "../absorption/configAbsorptionLinear";

export const configItemAlice: IConfigItem = {
  Absorptions: [
    { ClassName: NameAbsorption.LINEAR, Config: configAbsorptionLinear },
    { ClassName: NameAbsorption.LINEAR, Config: configAbsorptionLinear }
  ],
  Visualizer: {
    ClassName: NameShape.ALICE_BALL,
    Config: configShapeAliceBall
  },
  VelocityInterval: [
    { Low: -400, High: 400 },
    { Low: -400, High: 400 }
  ],
  VelocityMinimum: [
    configAbsorptionLinear.Constants.Coefficient * (1000 / appConfig.timeStep) * 1.1,
    configAbsorptionLinear.Constants.Coefficient * (1000 / appConfig.timeStep) * 1.1
  ]
};
