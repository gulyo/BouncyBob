import { ProductReusable } from "../../base/ProductReusable";
import { FactoryAbsorption } from "../absorption/FactoryAbsorption";
import { IAbsorption } from "../absorption/IAbsorption";
import { IConfigItem } from "./IConfigItem";
import { IItem } from "./IItem";

export class Item extends ProductReusable<IConfigItem> implements IItem {
  protected absorptions: IAbsorption[];

  protected coordinates: number[];

  public Init(config: IConfigItem): void {
    this.absorptions = config.Absorptions.map(descriptor => {
      const absorption = FactoryAbsorption.Provide(descriptor.ClassName);
      absorption.Init(descriptor.Config);
      return absorption;
    });
  }

  public UpdatePosition(coordinates: number[]) {
    this.coordinates = [...coordinates];
  }
}
