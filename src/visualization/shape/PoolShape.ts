import { IPool } from "../../base/IPool";
import { Pool } from "../../base/Pool";
import { IShape } from "./IShape";

class PoolClass extends Pool<IShape> {}

export const PoolShape: IPool<IShape> = new PoolClass();
