import { Product } from "../../base/Product";
import { BBEvent } from "../../util/event/BBEvent";
import { IEvent } from "../../util/event/IEvent";
import { logBouncyBob } from "../../util/logConfig";
import { selectDomElement } from "../../util/selectDomElement";
import { IArgumentEventCreation } from "./IArgumentEventCreation";
import { IConfigCreatorDom } from "./IConfigCreatorDom";
import { ICreator } from "./ICreator";
import ClickEvent = JQuery.ClickEvent;

export class CreatorDom extends Product<IConfigCreatorDom> implements ICreator {
  protected element: JQuery;

  protected onCreation: IEvent<IArgumentEventCreation> = new BBEvent<IArgumentEventCreation>();

  public get OnCreation(): IEvent<IArgumentEventCreation> {
    return this.onCreation;
  };

  public Init(config: IConfigCreatorDom): void {
    this.element = selectDomElement(config.ElementSelector);
    this.element.on("click", (event: ClickEvent) => logBouncyBob.info({msg: "Click", data: event}));
  }

}
