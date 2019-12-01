import { appConfig } from "../../../appConfig";
import { IConfigWorldDom3d } from "../../../visualization/world/IConfigWorldDom3d";

export const configWorldDom3d: IConfigWorldDom3d = {
  Name: "ScreenBox",
  ElementSelector: appConfig.domWorldElementSelector,
  DepthInterval: {
    Low: 0,
    High: 40,
  },
};
