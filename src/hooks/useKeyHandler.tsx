import { useEffect } from "react";
import { useClearAll } from "~/hooks/useClearAll";
import type { StateFn } from "~/types";

type Props = {
  key: "Escape";
  clearFn?: StateFn<string>;
};

export const useKeyHandler = ({ key, clearFn }: Props): null => {
  const clearAll = useClearAll();

  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      switch (key) {
        case "Escape":
          clearAll();
          clearFn("");
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return null;
};
