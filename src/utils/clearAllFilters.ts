interface FilterFunctions {
  setCurrentColor: (color: string) => void;
  toggleFiltersActivity: (flag: boolean) => void;
}

export const clearAllFilters = ({
  setCurrentColor,
  toggleFiltersActivity
}: FilterFunctions) => {
  setCurrentColor("");
  toggleFiltersActivity(false);
};
