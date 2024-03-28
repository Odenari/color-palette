import { HTMLAttributes } from "react";

type Props = {
  id: string;
  labelText?: string;
  classes?: string;
  value?: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
} & HTMLAttributes<HTMLInputElement>;

export const TextInput = ({
  id,
  value,
  onChange,
  classes,
  labelText,
  placeholder
}: Props) => {
  return (
    <label className="w-full" htmlFor={id}>
      {labelText && <span>{labelText}</span>}
      <input
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        type="text"
        className={`default-input ${classes}`}
        placeholder={placeholder ? placeholder : "Enter ypur data"}
        required
        minLength={6 || 7}
        maxLength={7}
        autoComplete="off"
        title="Find existing color in HEX format or add new one"
      />
    </label>
  );
};
