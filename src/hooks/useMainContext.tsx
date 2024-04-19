import { useContext } from "react";
import { MainContext } from "../contexts/mainContext";

export const useMainContext = () => {
  const context = useContext(MainContext);

  console.assert(
    !!context,
    new Error("Main Context cannot be empty or nullish")
  );
  return context;
};
