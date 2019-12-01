import { appConfig } from "../../appConfig";
import { IInterval } from "../../util/IInterval";
import { logBouncyBob } from "../../util/logConfig";
import { IConfigShape } from "./IConfigShape";
import { ICollision } from "./IShape";
import { Shape } from "./Shape";

export class ShapeLog extends Shape {
  private static readonly FILTER_CONSTANT: number = 1000 / appConfig.timeStep;

  protected config: IConfigShape;
  protected logCounter: number = 0;

  public Hide(): void {
    logBouncyBob.info({ msg: `Ball ${this.GUId} vanished` });
  }

  public Init(config: IConfigShape): void {
    this.config = config;
  }

  public Show(): void {
    logBouncyBob.info({ msg: `Ball ${this.GUId} appeared` });
  }

  public MoveTo(coordinates: number[]): void {
    super.MoveTo(coordinates);
    this.logCounter %= ShapeLog.FILTER_CONSTANT;
    if (!this.logCounter++) {
      logBouncyBob.info({
        msg: `Ball ${this.GUId} moved`,
        data: this.coordinates,
      });
    }
  }

  public CalculateCollisions(extremes: IInterval[]): ICollision[] {
    const collisions: ICollision[] = [];
    for (let i: number = 0; i < Math.min(this.coordinates.length, extremes.length); ++i) {
      const coordinate: number = this.coordinates[i];
      const extreme: IInterval = extremes[i];
      if (coordinate < extreme.Low) {
        collisions.push({ Collided: true, Overdrive: (extreme.Low - coordinate) * 2 });
      } else if (coordinate > extreme.High) {
        collisions.push({ Collided: true, Overdrive: (extreme.High - coordinate) * 2 });
      } else {
        collisions.push({ Collided: false });
      }
    }
    for (let i: number = collisions.length; i < this.coordinates.length; ++i) {
      collisions.push({ Collided: false });
    }
    return collisions;
  }
}
