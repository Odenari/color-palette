export type StateFn<T> = React.Dispatch<React.SetStateAction<T>>;

export type InputErrors =
  | "Color wasn't provided"
  | "Invalid color. Please, try again."
  | "";
export type ColorSubmitStatus = "Color was added" | "Color exists" | "";

export type SaturationColors = "Red" | "Green" | "Blue";

export interface Color {
  isDefault?: boolean;
  color: string;
}

export interface ContextProps {
  currentColor: Color;
  setCurrentColor: StateFn<Color>;
  isFiltersActive: boolean;
  toggleFiltersActivity: StateFn<boolean>;
  customColors: Color[];
  setCustomColors: StateFn<Color[]>;
  colorInputError: InputErrors;
  setColorInputError: StateFn<InputErrors>;
  statusMessage: ColorSubmitStatus;
  setStatusMessage: StateFn<ColorSubmitStatus>;
  //TODO this isn't belong here so modify color list by those props or smth like that
  //   luminosity?: number;
  //   showAll: boolean;
  //   showDexportue: StateFn<boolean>;
  //   isMoreGreen: boolean;
  //   isMoreBlue: boolean;
}
