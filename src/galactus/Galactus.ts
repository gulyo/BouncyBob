import { appConfig } from "../appConfig";
import { FactorySpace } from "../continuum/space/FactorySpace";
import { ISpace } from "../continuum/space/ISpace";
import { selectDomElement } from "../util/selectDomElement";
import { buttonList } from "./buttonList";
import STYLE from "./Galactus.m.scss";
import { IButtonDescriptor } from "./IButtonDescriptor";
import ClickEvent = JQuery.ClickEvent;

/**
 * A simple world creator class to initialize simulation
 */
export class Galactus {
  private static readonly BUTTON_LIST: IButtonDescriptor[] = buttonList;

  private readonly container: JQuery;
  private readonly element: JQuery;

  constructor(selector: string = appConfig.domWorldElementSelector) {
    this.container = selectDomElement(selector);

    this.element = $(`<div class="${STYLE.buttonPanel}"></div>`);

    this.createButtons();

    this.container.append(this.element);
  }

  private createButtons(): void {
    Galactus.BUTTON_LIST.forEach((buttonDescriptor: IButtonDescriptor) => {
      const button: JQuery = $(`<button>${buttonDescriptor.Text}</button>`);
      button.addClass(STYLE.worldButton);
      button.on("click", (event: ClickEvent) => {
        event.preventDefault();
        event.stopPropagation();
        const space: ISpace = FactorySpace.Provide(buttonDescriptor.Descriptor.ClassName);
        space.Init(buttonDescriptor.Descriptor.Config);

        window.setInterval(() => space.Update(), appConfig.timeStep);
        this.element.remove();
      });

      this.element.append(button);
    });
  }
}
