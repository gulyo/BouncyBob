import { NameAcceleration } from "../../../continuum/acceleration";
import { IConfigDimension } from "../../../continuum/dimension/IConfigDimension";
import { configAccelerationGravityEarth } from "../acceleration/configAccelerationGravityEarth";

export const configDimensionGravity: IConfigDimension = {
  Accelerators: [{ ClassName: NameAcceleration.GRAVITY, Config: configAccelerationGravityEarth }],
};
