// https://github.com/mreuvers/typescript-logging/blob/HEAD/docs/latest_categorized.md
import { Category, CategoryConfiguration, CategoryServiceFactory, LogLevel } from "typescript-logging";
import { appName } from "../appGlobals";

// Optionally change default settings, in this example set default logging to Info.
// Without changing configuration, categories will log to Error.
CategoryServiceFactory.setDefaultConfiguration(new CategoryConfiguration(LogLevel.Info));

// Create categories, they will auto register themselves.
// This creates one root (no parent) category
export const logBouncyBob = new Category(appName);
