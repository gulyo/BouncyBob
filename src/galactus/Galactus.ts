import { appConfig } from "../appConfig";
import { IDescriptorProduct } from "../base/IDescriptorProduct";
import { configSpaceEarth2d } from "../configuration/continuum/space/configSpaceEarth2d";
import { configSpaceEarth3d } from "../configuration/continuum/space/configSpaceEarth3d";
import { NameSpace } from "../continuum/space";
import { FactorySpace } from "../continuum/space/FactorySpace";
import { IConfigSpace } from "../continuum/space/IConfigSpace";
import { ISpace } from "../continuum/space/ISpace";
import { selectDomElement } from "../util/selectDomElement";
import STYLE from "./Galactus.m.scss";
import ClickEvent = JQuery.ClickEvent;

interface IButtonDescriptor {
  Text: string;
  Descriptor: IDescriptorProduct<IConfigSpace>;
}

/**
 * A simple world creator class to initialize simulation
 */
export class Galactus {
  private static readonly BUTTON_LIST: IButtonDescriptor[] = [
    {
      Text: "Nintento classic",
      Descriptor: {
        ClassName: NameSpace.EUCLIDEAN,
        Config: configSpaceEarth2d,
      },
    },
    {
      Text: "Into the Box",
      Descriptor: {
        ClassName: NameSpace.EUCLIDEAN,
        Config: configSpaceEarth3d,
      },
    },
  ];

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
