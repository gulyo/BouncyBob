import { selectDomElement } from "../../util/selectDomElement";
import { Creator } from "./Creator";
import ClickEvent = JQuery.ClickEvent;

export class CreatorDom extends Creator {
  protected defineCreation(): void {
    this.element = selectDomElement(this.config.ElementSelector);
    this.element.on("click", (event: ClickEvent) =>
      this.onCreation.Trigger({
        Coordinates: [event.clientX - this.element.position().left, event.clientY - this.element.position().top],
        Descriptor: this.descriptors[this.creationCounter++ % this.descriptors.length],
      }),
    );
  }
}
