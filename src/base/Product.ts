import guid from "../util/guid";
import IConfigProduct from "./IConfigProduct";
import IProduct from "./IProduct";

export default abstract class Product<TConfig extends IConfigProduct = IConfigProduct> implements IProduct<TConfig> {

  protected guid: string;

  constructor() {
    this.setGuid();
  }

  public get GUId(): string {
    return this.guid;
  }

  public abstract Init(config: TConfig): void;

  protected setGuid() {
    this.guid = guid();
  }

}
