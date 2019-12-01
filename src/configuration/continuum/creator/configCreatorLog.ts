import { IConfigCreatorDom } from "../../../continuum/creator/IConfigCreatorDom";
import { NameItem } from "../../../continuum/item";
import { configItemLog } from "../item/configItemLog";

export const configCreatorLog: IConfigCreatorDom = {
  ItemDescriptors: [
    {
      ClassName: NameItem.GENERIC,
      Config: configItemLog,
    },
  ],
  ElementSelector: "html",
  ExtraCoordinates: [
    { High: 1024, Low: -1024 },
    { High: 512, Low: 0 },
    { High: 2048, Low: 0 },
  ],
};
