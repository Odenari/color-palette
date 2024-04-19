import { useEffect } from "react";
import { useClearAll } from "~/hooks/useClearAll";
import type { StateFn } from "~/types";

type Props = {
  key: string;
  searchInputSetter?: StateFn<string>;
};

export const useKeyHandler = ({ key, searchInputSetter }: Props): null => {
  const clearAll = useClearAll();

  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      switch (key) {
        case "Escape":
          clearAll();
          searchInputSetter("");
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return null;
};