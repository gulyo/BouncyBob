import { appConfig } from "../../../appConfig";
import { IConfigShapeDomBall } from "../../../visualization/shape/IConfigShapeDomBall";

export const configShapeDomBall: IConfigShapeDomBall = {
  ContainerSelector: appConfig.domWorldElementSelector,
  Constants: {
    Diameter: 40,
  },
};
