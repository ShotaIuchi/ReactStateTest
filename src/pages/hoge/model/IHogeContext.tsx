import { createContext } from "react";
import { IHogeData } from "./IHogeData";

export interface IHogeContext extends IHogeData {
  dispatch: React.Dispatch<any>;
}

export const HogeContext = createContext({} as IHogeContext);
