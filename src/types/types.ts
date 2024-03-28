export type StateFn<T> = React.Dispatch<React.SetStateAction<T>>;
export type ColorLists = "defaultColors" | "customColors";

export interface ContextProps {
  setCurrentColor: StateFn<string>;
  currentColor: string;
  isFiltersActive: boolean;
  colorList: string[];
  setColorList: StateFn<string[]>;
  toggleFiltersActivity: StateFn<boolean>;
  //TODO this isn't belong here so modify color list by those props or smth like that
  //   luminosity?: number;
  //   showAll: boolean;
  //   showDexportue: StateFn<boolean>;
  //   isMoreGreen: boolean;
  //   isMoreBlue: boolean;
}
