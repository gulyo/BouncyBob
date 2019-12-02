import { IDescriptorProduct } from "../../base/IDescriptorProduct";
import { IInterval } from "../../util/IInterval";
import { selectDomElement } from "../../util/selectDomElement";
import { IConfigItem } from "../item/IConfigItem";
import { Creator } from "./Creator";
import { IConfigCreatorDom } from "./IConfigCreatorDom";
import ClickEvent = JQuery.ClickEvent;

export class CreatorDom extends Creator<IConfigCreatorDom> {
  protected defineCreation(): void {
    this.element = selectDomElement(this.config.ElementSelector);
    this.element.on("click", (event: ClickEvent) => {
      const coordinates: number[] = [
        event.clientX - this.element.position().left,
        event.clientY - this.element.position().top,
      ];
      this.config.ExtraCoordinates.forEach((interval: IInterval) =>
        coordinates.push(Math.random() * (interval.High - interval.Low) + interval.Low),
      );
      const descriptor: IDescriptorProduct<IConfigItem> = this.descriptors[
        this.creationCounter++ % this.descriptors.length
      ];
      this.onCreation.Trigger({
        Coordinates: coordinates,
        Descriptor: descriptor,
      });
    });
  }
}
