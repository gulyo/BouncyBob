import { appConfig } from "../src/appConfig";
import { configAccelerationGravityEarth } from "../src/configuration/continuum/acceleration/configAccelerationGravityEarth";
import { NameAcceleration } from "../src/continuum/acceleration";
import { FactoryAcceleration } from "../src/continuum/acceleration/FactoryAcceleration";
import { IAcceleration } from "../src/continuum/acceleration/IAcceleration";

describe("Acceleration", () => {
  let acceleration: IAcceleration;
  const velocity: number = 100;

  test("Gravity", () => {
    acceleration = FactoryAcceleration.Provide(NameAcceleration.GRAVITY);
    acceleration.Init(configAccelerationGravityEarth);

    expect(acceleration.UpdateVelocity(velocity)).toEqual(velocity + configAccelerationGravityEarth.Constants.coefficient * (appConfig.timeStep / 1000));
  });


});
