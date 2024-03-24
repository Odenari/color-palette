export interface ContextProps {
  setColor: React.Dispatch<React.SetStateAction<string>>;
  currentColor?: string | undefined;
  isFiltersActive: boolean;
  //   luminosity?: number;
  //   showAll: boolean;
  //   showDarkest: boolean;
  //   showLightest: boolean;
  //   isMoreRed: boolean;
  //   isMoreGreen: boolean;
  //   isMoreBlue: boolean;
}
