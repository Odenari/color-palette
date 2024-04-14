import styles from "./BrightnessFilters.module.css";
import { useMainContext } from "~/hooks/useMainContext";
import { FilterByBrightness } from "~/types";
import { FlexBox, RadioInput, Text } from "~/ui";

type RadioButtons = {
  value: FilterByBrightness;
};

const radioButtons: RadioButtons[] = [
  { value: "All" },
  { value: "Lightest" },
  { value: "Darkest" }
];

type Props = {
  disabled: boolean;
};

export const BrightnessFilters = ({ disabled }: Props) => {
  const { brightness, setBrightness } = useMainContext();

  return (
    <fieldset>
      <legend>
        <Text classes="marginBottom underline">Brightness</Text>
      </legend>
      <FlexBox flexDirection="column" alignItems="start">
        {radioButtons.map(({ value }) => (
          <RadioInput
            key={value}
            value={value}
            labelText={value}
            disabled={disabled}
            checked={brightness === value}
            onChange={() => setBrightness(value)}
          />
        ))}
      </FlexBox>
    </fieldset>
  );
};
