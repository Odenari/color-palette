import { KeyboardEventHandler, useEffect } from "react";
import { useMainContext } from "~/hooks/useMainContext";
import { clearAllFilters } from "~/utils/clearAllFilters";
import type { StateFn } from "~/types";

type Props = {
  key?: string;
  clearInput: StateFn<string>;
};
export const KeyHandler = ({ clearInput }: Props) => {
  const { toggleFiltersActivity } = useMainContext();

  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      switch (key) {
        case "Escape":
          clearAllFilters({ clearInput, toggleFiltersActivity });
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return null;
};
