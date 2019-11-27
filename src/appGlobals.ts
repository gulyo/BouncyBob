import packageJson from "../package.json";
import { appConfig } from "./appConfig";

export const appName: string = packageJson.name;
export const appVersion: string = packageJson.version;

export const appContainerElement: JQuery = $(appConfig.domWorldElementSelector);
