import { appConfig } from "../../../appConfig";
import { IConfigShapeDomBall } from "../../../visualization/shape/IConfigShapeDomBall";

export const configShapeAliceBall: IConfigShapeDomBall = {
  ContainerSelector: appConfig.domWorldElementSelector,
  Constants: {
    Diameter: 40,
  },
};
