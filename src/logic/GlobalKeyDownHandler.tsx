import { KeyboardEventHandler, useEffect } from "react";
import { useMainContext } from "~/hooks/useMainContext";
import { clearAllFilters } from "~/utils/clearAllFilters";

export const GlobalKeyDownHandler = () => {
  const { setCurrentColor, toggleFiltersActivity } = useMainContext();

  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      switch (key) {
        case "Escape":
          clearAllFilters({ setCurrentColor, toggleFiltersActivity });
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return null;
};
