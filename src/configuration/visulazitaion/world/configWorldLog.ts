import { IConfigWorldLog } from "../../../visualization/world/IConfigWorldLog";

export const configWorldLog: IConfigWorldLog = {
  Size: [
    { High: $(document).innerWidth(), Low: 0 },
    { High: $(document).innerHeight(), Low: 0 },
    { High: 1024, Low: -1024 },
    { High: 512, Low: 0 },
    { High: 2048, Low: 0 },
  ],
};
