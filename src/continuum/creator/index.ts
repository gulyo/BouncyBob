import { CreatorDom } from "./CreatorDom";
import { FactoryCreator } from "./FactoryCreator";

export enum NameCreator {
  DOM_CLICK = "DomClick",
}

FactoryCreator.Register(NameCreator.DOM_CLICK, CreatorDom);
