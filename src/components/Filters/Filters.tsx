import { ChangeEvent } from "react";
import styles from "./Filters.module.css";
import { useMainContext } from "~/hooks/useMainContext";
import { Checkbox, RangeInput, Text } from "~/ui";
import { FlexBox } from "~/ui/FlexBox";
import { RGBFilters, SaturationFilters } from "~c/";

export const Filters = () => {
  const { isFiltersActive, toggleFiltersActivity } = useMainContext();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    toggleFiltersActivity(e.currentTarget.checked);
  };

  return (
    <section className={styles.wrapper}>
      <Checkbox
        id="enableFilters"
        checked={isFiltersActive}
        labelText="Enable Filters"
        handleChange={handleChange}
      />
      <div className={`${!isFiltersActive && styles.disabledWrapper}`}>
        <Text classes="marginBlock">Sort colors by:</Text>
        <FlexBox justifyContent="space-between">
          <SaturationFilters isDisabled={isFiltersActive} />
          <RGBFilters />
        </FlexBox>
        <RangeInput />
      </div>
    </section>
  );
};
