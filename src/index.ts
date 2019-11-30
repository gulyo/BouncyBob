import { appConfig } from "./appConfig";
import "./appImports";
import { configSpaceEarth2d } from "./configuration/continuum/space/configSpaceEarth2d";
import { NameSpace } from "./continuum/space";
import { FactorySpace } from "./continuum/space/FactorySpace";
import { ISpace } from "./continuum/space/ISpace";
import { Notifier } from "./util/Notifier";

try {
  Notifier.Notify("Welcome to Bouncy Bob application");

  const space: ISpace = FactorySpace.Provide(NameSpace.EUCLIDEAN);
  space.Init(configSpaceEarth2d);

  window.setInterval(() => space.Update(), appConfig.timeStep);
} catch (e) {
  Notifier.Notify("An error occurred, check the console, please.");
  // Logger doesn't support source-map, so I just let the Developer's tool handle it
  throw e;
}
