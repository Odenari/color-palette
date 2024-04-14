import styles from "./Filters.module.css";
import { ChangeEvent } from "react";
import { useMainContext } from "~/hooks/useMainContext";
import { Checkbox, Text, FlexBox } from "~/ui";
import { RGBSaturationFilters, BrightnessFilters, LuminosityFilter } from "~c/";

export const Filters = () => {
  const { isFiltersActive, toggleFiltersActivity } = useMainContext();

  return (
    <section className={styles.wrapper}>
      <div className={"flex-center"}>
        <Checkbox
          id="enableFilters"
          checked={isFiltersActive}
          labelText="Enable Filters"
          onChange={(e) => toggleFiltersActivity(e.target.checked)}
        />
      </div>
      <div className={`${!isFiltersActive && styles.disabledWrapper}`}>
        <Text classes="flex-center marginBlock">Sort colors by:</Text>
        <FlexBox justifyContent="space-between">
          <BrightnessFilters disabled={!isFiltersActive} />
          <RGBSaturationFilters disabled={!isFiltersActive} />
        </FlexBox>
        <LuminosityFilter disabled={!isFiltersActive} />
      </div>
    </section>
  );
};
