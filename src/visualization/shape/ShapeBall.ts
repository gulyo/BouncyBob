import { IInterval } from "../../util/IInterval";
import { IConfigShapeDomBall } from "./IConfigShapeDomBall";
import { ICollision } from "./IShape";
import { Shape } from "./Shape";

export abstract class ShapeBall extends Shape<IConfigShapeDomBall> {
  protected diameter: number;

  public CalculateCollisions(extremes: IInterval[]): ICollision[] {
    const collisions: ICollision[] = [];
    const offset: number = this.diameter / 2;
    for (let i: number = 0; i < Math.min(this.coordinates.length, extremes.length); ++i) {
      const coordinate: number = this.coordinates[i];
      const extreme: IInterval = extremes[i];
      if (coordinate < extreme.Low + offset) {
        collisions.push({ Collided: true, Overdrive: (extreme.Low + offset - coordinate) * 2 });
      } else if (coordinate > extreme.High - offset) {
        collisions.push({ Collided: true, Overdrive: (extreme.High - offset - coordinate) * 2 });
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
