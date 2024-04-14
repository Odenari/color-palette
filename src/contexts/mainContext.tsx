import { createContext } from "react";
import { MainContextType } from "~/hooks/useStateInitializer";

export const MainContext = createContext<MainContextType | undefined>(
  undefined
);
