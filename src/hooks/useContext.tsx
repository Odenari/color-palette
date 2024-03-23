import { createContext, ReactNode } from "react";
import type { ContextProps } from "../types/types.ts";

interface MainContext {
  values: ContextProps;
  children: ReactNode;
}

export const MainContextProvider = ({ values, children }: MainContext) => {
  const Context = createContext(values);
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
