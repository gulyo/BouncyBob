import { NameAcceleration } from "../../../continuum/acceleration";
import { IConfigDimension } from "../../../continuum/dimension/IConfigDimension";
import { configAcceleratioinGravityEarth } from "../acceleration/configAcceleratioinGravityEarth";

export const configDimensionGravity: IConfigDimension = {
  Accelerators: [{ ClassName: NameAcceleration.GRAVITY, Config: configAcceleratioinGravityEarth }],
};
