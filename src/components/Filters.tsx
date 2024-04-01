import { useMainContext } from "~/hooks/useMainContext";
import { Input, RangeInput, Text } from "~/ui";
import { RadioGroup, RGBGroup } from "~c/";

export const Filters = () => {
  const { isFiltersActive, toggleFiltersActivity } = useMainContext();

  return (
    <section className="filters-wrapper">
      <Input
        type="checkbox"
        id="enableFilters"
        disabled={false}
        checked={isFiltersActive}
        labelText="Enable Filters"
        stateSetter={toggleFiltersActivity}
      />
      {isFiltersActive && (
        <div>
          <Text>Sort by:</Text>
          <RadioGroup />
          <RGBGroup />
          <RangeInput />
        </div>
      )}
    </section>
  );
};
