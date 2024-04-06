import { useMainContext } from "~/hooks/useMainContext";
import { Color, StateFn } from "~/types";

interface FilterFunctions {
  clearInput: StateFn<string>;
  toggleFiltersActivity: (flag: boolean) => void;
  setCurrentColor: StateFn<Color>;
}

export const clearAllFilters = ({
  clearInput,
  toggleFiltersActivity,
  setCurrentColor
}: FilterFunctions) => {
  clearInput("");
  toggleFiltersActivity(false);
  setCurrentColor(undefined);
};

export function clearCurrentState() {
  const { setCurrentColor, setColorInputError, setStatusMessage } =
    useMainContext();
  setCurrentColor(undefined);
  setColorInputError("");
  setStatusMessage("");
}
