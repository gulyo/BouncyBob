import { appConfig } from "../../../appConfig";
import { IConfigShapeDomBall } from "../../../visualization/shape/IConfigShapeDomBall";

export const configShapeDomAlice: IConfigShapeDomBall = {
  ContainerSelector: appConfig.domWorldElementSelector,
  Constants: {
    Diameter: 40,
  },
};
