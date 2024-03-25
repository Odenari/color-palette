export type StateFn<T> = React.Dispatch<React.SetStateAction<T>>;
export interface ContextProps {
  setColor: StateFn<string>;
  currentColor?: string;
  isFiltersActive: boolean;
  toggleFiltersActivity: StateFn<boolean>;
  //   luminosity?: number;
  //   showAll: boolean;
  //   showDarkest: boolean;
  //   showLightest: boolean;
  redValue: boolean;
  setRedValue: StateFn<boolean>;
  //   isMoreGreen: boolean;
  //   isMoreBlue: boolean;
}
