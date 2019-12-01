import { appConfig } from "../../../appConfig";
import { IConfigShapeDomBall } from "../../../visualization/shape/IConfigShapeDomBall";
import { configWorldDom3d } from "../world/configWorldDom3d";

const diameter: number = 60;

export const configShapeDomBall3d: IConfigShapeDomBall = {
  ContainerSelector: appConfig.domWorldElementSelector,
  Constants: {
    Diameter: diameter,
    DiameterCoefficient: (diameter * 0.67) / (configWorldDom3d.DepthInterval.High - configWorldDom3d.DepthInterval.Low),
  },
};
