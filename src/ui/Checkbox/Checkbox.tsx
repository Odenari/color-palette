import { ChangeEvent, HTMLAttributes } from "react";
import type { SaturationColors, StateFn } from "~/types";

type Props = {
  id: string;
  checked: boolean;
  labelText?: string;
  value?: SaturationColors | string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & HTMLAttributes<HTMLInputElement>;

export const Checkbox = ({
  id,
  checked,
  handleChange,
  value,
  labelText
}: Props) => {
  return (
    <label>
      <input
        id={id}
        name={id}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={(e) => handleChange(e)}
      />
      {labelText && <span>{labelText}</span>}
    </label>
  );
};
