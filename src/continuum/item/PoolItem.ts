import { IPool } from "../../base/IPool";
import { Pool } from "../../base/Pool";
import { IItem } from "./IItem";

class PoolClass extends Pool<IItem> {}

export const PoolItem: IPool<IItem> = new PoolClass();
