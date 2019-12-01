import { IConfigItem } from "../../../continuum/item/IConfigItem";
import { NameShape } from "../../../visualization/shape";
import { configShapeDomBall } from "../../visulazitaion/shape/configShapeDomBall";
import { configItem2dVerticalAbsorption } from "./configItem2dVerticalAbsorption";

export const configItem2dVerticalAbsorptionSvg: IConfigItem = JSON.parse(
  JSON.stringify(configItem2dVerticalAbsorption),
);
configItem2dVerticalAbsorptionSvg.Visualizer = {
  ClassName: NameShape.SVG_BALL,
  Config: configShapeDomBall,
};
