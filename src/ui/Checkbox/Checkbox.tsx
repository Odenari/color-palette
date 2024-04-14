import { InputHTMLAttributes } from "react";

type Props = {
  labelText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({ labelText, ...other }: Props) => {
  return (
    <label>
      <input type="checkbox" {...other} />
      {labelText && <span>{labelText}</span>}
    </label>
  );
};
