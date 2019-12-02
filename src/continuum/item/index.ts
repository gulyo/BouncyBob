import { Item } from "./Item";
import { PoolItem } from "./PoolItem";

export enum NameItem {
  GENERIC = "Generic",
}

PoolItem.Register(NameItem.GENERIC, Item);
