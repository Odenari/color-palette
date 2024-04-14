import { InputHTMLAttributes } from "react";
import { useMainContext } from "~/hooks/useMainContext";
import { Text, Checkbox, FlexBox } from "~/ui";

type Props = {
  disabled: boolean;
};

export const RGBSaturationFilters = ({ disabled }: Props) => {
  const { saturatuionFilters, setSaturationFilters } = useMainContext();

  return (
    <fieldset>
      <legend>
        <Text classes="marginBottom underline">Saturation</Text>
      </legend>
      <FlexBox flexDirection="column" alignItems="start">
        {Object.entries(saturatuionFilters).map(([color, active]) => (
          <Checkbox
            labelText={`${color} over 50%`}
            disabled={disabled}
            onChange={(e) =>
              setSaturationFilters((prevFilters) => ({
                ...prevFilters,
                [color]: e.target.checked
              }))
            }
          />
        ))}
      </FlexBox>
    </fieldset>
  );
};
