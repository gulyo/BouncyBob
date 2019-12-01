import { appConfig } from "./appConfig";
import "./appImports";
import { Galactus } from "./galactus/Galactus";
import { Notifier } from "./util/Notifier";

try {
  Notifier.Notify("Welcome to Bouncy Bob application");

  (() => new Galactus(appConfig.domWorldElementSelector))();
} catch (e) {
  Notifier.Notify("An error occurred, check the console, please.");
  // Logger doesn't support source-map, so I just let the Developer's tool handle it
  throw e;
}
