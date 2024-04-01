export type StateFn<T> = React.Dispatch<React.SetStateAction<T>>;

export type InputErrors =
  | "Color wasn't provided"
  | "Invalid color. Please, try again."
  | "";
export type ColorSubmitStatus = "Color was added" | "Color exists" | "";

export interface Color {
  isDefault?: boolean;
  color: string;
}

export interface ContextProps {
  currentColor: string;
  setCurrentColor: StateFn<string>;
  isFiltersActive: boolean;
  customColors: Color[];
  setCustomColors: StateFn<Color[]>;
  toggleFiltersActivity: StateFn<boolean>;
  //TODO this isn't belong here so modify color list by those props or smth like that
  //   luminosity?: number;
  //   showAll: boolean;
  //   showDexportue: StateFn<boolean>;
  //   isMoreGreen: boolean;
  //   isMoreBlue: boolean;
}
