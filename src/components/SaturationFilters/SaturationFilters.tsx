import styles from "./RadioGroup.module.css";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { FlexBox, RadioInput, Text } from "~/ui";

type Props = {
  isDisabled: boolean;
};

const radioButtons = [
  { value: "All" },
  { value: "Lightest" },
  { value: "Darkest" }
] as const;
type FilterByBrightness = (typeof radioButtons)[number]["value"];

export const SaturationFilters = ({ isDisabled }: Props) => {
  const [brightness, setBrightness] = useState<FilterByBrightness>("All");

  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setBrightness(e.target.value as FilterByBrightness);
  };
  return (
    <fieldset>
      <legend>
        <Text classes="marginBottom underline">Brightness</Text>
      </legend>
      <FlexBox flexDirection="column" alignItems="start">
        {radioButtons.map(({ value }) => (
          <RadioInput
            id={`filterBy${value}`}
            key={value}
            labelText={value}
            checked={brightness === value}
            value={value}
            handleChange={handleChange}
          />
        ))}
      </FlexBox>
    </fieldset>
  );
};
