import { useMainContext } from "~/hooks/useMainContext";
import { Text, Checkbox, FlexBox } from "~/ui";

type Props = {
  disabled: boolean;
};

export const RGBSaturationFilters = ({ disabled }: Props) => {
  const { saturationFilters, setSaturationFilters } = useMainContext();

  return (
    <fieldset>
      <legend>
        <Text classes="marginBottom underline">Saturation</Text>
      </legend>
      <FlexBox flexDirection="column" alignItems="start">
        {Object.entries(saturationFilters).map(([color, active]) => (
          <Checkbox
            key={color}
            labelText={`${color} over 50%`}
            disabled={disabled}
            checked={active}
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
