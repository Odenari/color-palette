export type StateFn<T> = React.Dispatch<React.SetStateAction<T>>;

export type InputErrors =
  | "Color was not provided"
  | "Invalid color. Please, try again."
  | undefined;

export type ColorSubmitStatus = "Color was added" | "Color exists" | undefined;

export type SaturationColors = "Red" | "Green" | "Blue";

export interface Color {
  isDefault?: boolean;
  color: string;
}

export type SaturationFilter = {
  [color in SaturationColors]: boolean;
};

export type FilterByBrightness = "All" | "Lightest" | "Darkest";

export type Filters = {
  luminosity: number;
  brightness: FilterByBrightness;
  saturation: SaturationFilter;
};

export type PossibleFilters = Partial<Filters>;

export type FiltersKeys = keyof Filters;

export type FiltersValues = Filters[keyof Filters];

export interface FiltersAction {
  type: FiltersKeys;
  payload: FiltersValues;
}
