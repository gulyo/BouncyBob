import { configSpaceEarth2d } from "../configuration/continuum/space/configSpaceEarth2d";
import { configSpaceEarth3d } from "../configuration/continuum/space/configSpaceEarth3d";
import { configSpaceEarthSvg } from "../configuration/continuum/space/configSpaceEarthSvg";
import { configSpaceLog } from "../configuration/continuum/space/configSpaceLog";
import { NameSpace } from "../continuum/space";
import { IButtonDescriptor } from "./IButtonDescriptor";

export const buttonList: IButtonDescriptor[] = [
  {
    Text: "Nintento classic",
    Descriptor: {
      ClassName: NameSpace.EUCLIDEAN,
      Config: configSpaceEarth2d,
    },
  },
  {
    Text: "Into the Box",
    Descriptor: {
      ClassName: NameSpace.EUCLIDEAN,
      Config: configSpaceEarth3d,
    },
  },
  {
    Text: "Seriously Versatile Game-engine",
    Descriptor: {
      ClassName: NameSpace.EUCLIDEAN,
      Config: configSpaceEarthSvg,
    },
  },
  {
    Text: "Log Ann's run",
    Descriptor: {
      ClassName: NameSpace.EUCLIDEAN,
      Config: configSpaceLog,
    },
  },
  // {
  //   Text: "Alice in Paralland",
  //   Descriptor: {
  //     ClassName: NameSpace.EUCLIDEAN,
  //     Config: configSpaceAlice,
  //   },
  // },
];
