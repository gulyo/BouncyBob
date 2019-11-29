import { ProductReusable } from "../../base/ProductReusable";
import { IShape } from "../../visualization/shape/IShape";
import { PoolShape } from "../../visualization/shape/PoolShape";
import { FactoryAbsorption } from "../absorption/FactoryAbsorption";
import { IAbsorption } from "../absorption/IAbsorption";
import { IConfigItem } from "./IConfigItem";
import { IItem } from "./IItem";

export class Item extends ProductReusable<IConfigItem> implements IItem {
  protected absorptions: IAbsorption[];
  protected visualizer: IShape;

  protected coordinates: number[];
  protected config: IConfigItem;

  public Init(config: IConfigItem): void {
    this.config = config;

    this.absorptions = config.Absorptions.map(descriptor => {
      const absorption = FactoryAbsorption.Provide(descriptor.ClassName);
      absorption.Init(descriptor.Config);
      return absorption;
    });

    this.visualizer = PoolShape.Provide(this.config.Visualizer.ClassName);
    this.visualizer.Init(this.config.Visualizer.Config);
    this.visualizer.Show();
  }

  public UpdatePosition(coordinates: number[]) {
    this.coordinates = [...coordinates];
  }

  public Deactivate(): void {
    if (!!this.visualizer) {
      this.visualizer.Hide();
      this.visualizer.Deactivate();
    }
    super.Deactivate();
  }
}
