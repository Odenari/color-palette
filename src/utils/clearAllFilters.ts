import { StateFn } from "~/types";

interface FilterFunctions {
  clearInput: StateFn<string>;
  toggleFiltersActivity: (flag: boolean) => void;
}

export const clearAllFilters = ({
  clearInput,
  toggleFiltersActivity
}: FilterFunctions) => {
  clearInput("");
  toggleFiltersActivity(false);
};
