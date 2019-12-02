import { BBEvent } from "../util/event/BBEvent";
import { IEvent } from "../util/event/IEvent";
import { IConfigProduct } from "./IConfigProduct";
import { IProductReusable } from "./IProductReusable";
import { Product } from "./Product";

export abstract class ProductReusable<TConfig extends IConfigProduct = IConfigProduct> extends Product<TConfig>
  implements IProductReusable<TConfig> {
  protected isActive: boolean = false;

  protected deActivator: () => void;

  protected onDeactivate: IEvent;

  public get IsActive(): boolean {
    return this.isActive;
  }

  public Activate(deActivator: () => void): void {
    this.deActivator = deActivator;
    this.onDeactivate = new BBEvent();
    this.isActive = true;
  }

  public Deactivate(): void {
    this.onDeactivate.Trigger();
    this.deActivator();
    this.isActive = false;
  }

  public get OnDeactivate(): IEvent {
    return this.onDeactivate;
  }
}
