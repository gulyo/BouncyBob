import { appConfig } from "../../../appConfig";
import { IConfigAcceleration } from "../../../continuum/acceleration/IConfigAcceleration";

export const configAccelerationGravityEarth: IConfigAcceleration = {
  Constants: {
    coefficient: 9.80665 * (1000 / appConfig.timeStep),
  },
};
