import { KeyboardEventHandler, useEffect } from "react";
import { useMainContext } from "~/hooks/useMainContext";
import { clearAllFilters, clearCurrentState } from "~/utils/clearAllFilters";
import type { StateFn } from "~/types";

type Props = {
  clearInput: StateFn<string>;
};
export const KeyHandler = ({ clearInput }: Props) => {
  const { setCurrentColor, toggleFiltersActivity } = useMainContext();

  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      switch (key) {
        case "Escape":
          clearCurrentState();
          clearInput("");
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return null;
};
