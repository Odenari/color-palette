import { RadioInput, Text } from "~/ui";

export const RadioGroup = () => {
  return (
    <div className="filters-group-outer">
      <Text content="Brightness:" />
      <div className="filters-group-inner">
        <RadioInput labelText="All" name="brightnessRadio" />
        <RadioInput labelText="Lightest" name="brightnessRadio" />
        <RadioInput labelText="Darkest" name="brightnessRadio" />
      </div>
    </div>
  );
};
