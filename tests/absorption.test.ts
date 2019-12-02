import { configAbsorptionFullElastic } from "../src/configuration/continuum/absorption/configAbsorptionFullElastic";
import { configAbsorptionLinear } from "../src/configuration/continuum/absorption/configAbsorptionLinear";
import { NameAbsorption } from "../src/continuum/absorption";
import { FactoryAbsorption } from "../src/continuum/absorption/FactoryAbsorption";
import { IAbsorption } from "../src/continuum/absorption/IAbsorption";

describe("Absorption", () => {
  let absorption: IAbsorption;
  const velocity: number = 100;

  test("Fully elastic", () => {
    absorption = FactoryAbsorption.Provide(NameAbsorption.FULL_ELASTIC);
    absorption.Init(configAbsorptionFullElastic);

    expect(absorption.UpdateVelocity(velocity)).toEqual(velocity);
  });

  test("Linear", () => {
    absorption = FactoryAbsorption.Provide(NameAbsorption.LINEAR);
    absorption.Init(configAbsorptionLinear);

    expect(absorption.UpdateVelocity(velocity)).toEqual(velocity * configAbsorptionLinear.Constants.Coefficient);
  });
});
