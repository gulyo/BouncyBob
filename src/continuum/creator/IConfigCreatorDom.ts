import { IConfigCreator } from "./IConfigCreator";

export interface IConfigCreatorDom extends IConfigCreator {
  ElementSelector: string;
}
