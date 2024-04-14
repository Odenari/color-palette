import { useContext } from "react";
import { MainContext } from "../contexts/mainContext";

export const useMainContext = () => {
  const context = useContext(MainContext);
  /** throwing an error here would be a better idea or not? */
  console.assert(
    !!context,
    new Error("Main Context cannot be empty or nullish")
  );
  return context;
};
