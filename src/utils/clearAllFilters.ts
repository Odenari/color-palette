interface FilterFunctions {
  setColor: (color: string) => void;
  toggleFiltersActivity: (flag: boolean) => void;
}

export const clearAllFilters = ({
  setColor,
  toggleFiltersActivity,
}: FilterFunctions) => {
  setColor('');
  toggleFiltersActivity(false);
};
