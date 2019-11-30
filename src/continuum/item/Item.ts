import { appConfig } from "../../appConfig";
import { ProductReusable } from "../../base/ProductReusable";
import { IInterval } from "../../util/IInterval";
import { ICollision, IShape } from "../../visualization/shape/IShape";
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

  protected velocity: number[];
  protected readonly velocityMultiplier: number = appConfig.timeStep / 1000;

  public get Velocity(): number[] {
    return this.velocity;
  }

  public set Velocity(value: number[]) {
    this.velocity = [...value];
  }

  public Init(config: IConfigItem): void {
    this.config = config;

    this.absorptions = config.Absorptions.map(descriptor => {
      const absorption = FactoryAbsorption.Provide(descriptor.ClassName);
      absorption.Init(descriptor.Config);
      return absorption;
    });

    this.randomizeVelocity();

    this.visualizer = PoolShape.Provide(this.config.Visualizer.ClassName);
    this.visualizer.Init(this.config.Visualizer.Config);
    this.visualizer.Show();
  }

  public UpdatePosition(coordinates: number[]) {
    this.coordinates = [...coordinates];
    this.moveTo();
  }

  public Deactivate(): void {
    if (!!this.visualizer) {
      this.visualizer.Hide();
      this.visualizer.Deactivate();
    }
    super.Deactivate();
  }

  public Move() {
    for (let i: number = 0; i < Math.min(this.velocity.length, this.coordinates.length); ++i) {
      this.coordinates[i] += this.velocity[i] * this.velocityMultiplier;
    }
    this.moveTo();
  }

  public HandleCollisions(extremes: IInterval[]): void {
    if (!!this.visualizer) {
      const collisions: ICollision[] = this.visualizer.CalculateCollisions(extremes);
      for (let i: number = 0; i < Math.min(this.Velocity.length, collisions.length); ++i) {
        if (collisions[i].Collided) {
          if (this.absorptions.length > i) {
            this.velocity[i] = this.absorptions[i].UpdateVelocity(this.velocity[i]);
          }
          this.velocity[i] *= -1;
          if (this.config.VelocityMinimum.length > i) {
            if (this.config.VelocityMinimum[i] > Math.abs(this.velocity[i])) {
              this.Deactivate();
              return;
            }
          }
          if (this.coordinates.length > i) {
            this.coordinates[i] = !!collisions[i].Overdrive
              ? this.coordinates[i] + collisions[i].Overdrive
              : this.coordinates[i];
          }
        }
      }
      this.moveTo();
    }
  }

  protected randomizeVelocity(): void {
    this.velocity = this.config.VelocityInterval.map(
      (velocityInterval: IInterval) =>
        Math.random() * (velocityInterval.High - velocityInterval.Low) + velocityInterval.Low,
    );
  }

  protected moveTo(): void {
    if (!!this.visualizer) {
      this.visualizer.MoveTo(this.coordinates);
    }
  }
}
