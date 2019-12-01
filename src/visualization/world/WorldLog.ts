import { IInterval } from "../../util/IInterval";
import { Notifier } from "../../util/Notifier";
import { IConfigWorldLog } from "./IConfigWorldLog";
import { World } from "./World";

export class WorldLog extends World<IConfigWorldLog> {
  public Init(config: IConfigWorldLog): void {
    super.Init(config);
    Notifier.Notify("Log based world, open the console, please");
  }

  public get Extremes(): IInterval[] {
    return this.config.Size;
  }

  public Hide(): void {
    // Do nothing
  }
}
