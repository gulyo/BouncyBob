import IConfigProduct from "../../base/IConfigProduct";

export default interface IConfigAcceleration extends IConfigProduct {
  Constants: {
    [key: string]: number;
  }
}
