import { ChangeEvent, useReducer, useState } from "react";
import { SaturationColors } from "~/types";
import { Text, Checkbox } from "~/ui";
import { FlexBox } from "~/ui/FlexBox";

type Filter = {
  readonly color: SaturationColors;
  isActive: boolean;
};

type FilterTuple = [
  { color: "Red"; isActive: boolean },
  { color: "Green"; isActive: boolean },
  { color: "Blue"; isActive: boolean }
];

const Filters: FilterTuple = [
  { color: "Red", isActive: false },
  { color: "Green", isActive: false },
  { color: "Blue", isActive: false }
];

const reduceFilters = (
  state: FilterTuple,
  { filterColor }: { filterColor: SaturationColors }
) =>
  state.map((filter) => {
    return filter.color === filterColor
      ? { ...filter, isActive: !filter.isActive }
      : filter;
  });

export const RGBFilters = () => {
  const [filters, dispatchFilters] = useReducer(reduceFilters, Filters);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const color = e.target.id.split("-")[1] as SaturationColors;
    dispatchFilters({ filterColor: color });
  };

  return (
    <fieldset>
      <legend>
        <Text classes="marginBottom underline">Saturation</Text>
      </legend>
      <FlexBox flexDirection="column" alignItems="start">
        {filters.map(({ color, isActive }: Filter) => {
          return (
            <Checkbox
              key={`weak-key-${color}`}
              id={`filter-${color}`}
              labelText={`${color} over 50%`}
              checked={isActive}
              handleChange={handleChange}
            />
          );
        })}
      </FlexBox>
    </fieldset>
  );
};
