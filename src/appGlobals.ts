import packageJson from "../package.json";

export const appName: string = packageJson.name;
export const appVersion: string = packageJson.version;

export const appContainerElement: JQuery = $("body");
