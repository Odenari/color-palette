import styles from "./RadioInput.module.css";
import { ChangeEventHandler, HTMLAttributes } from "react";

type Props = {
  id: string;
  value: string;
  checked: boolean;
  name?: string;
  labelText: string;
  handleChange: ChangeEventHandler;
} & HTMLAttributes<HTMLInputElement>;

export const RadioInput = ({
  name,
  id,
  value,
  checked,
  handleChange,
  labelText
}: Props) => {
  return (
    <label className={styles.wrapper} htmlFor={name ? name : id}>
      <input
        id={id}
        type="radio"
        name={name ? name : id}
        onChange={(e) => handleChange(e)}
        value={value}
        checked={checked}
      />
      {labelText && <span className={styles.label}>{labelText}</span>}
    </label>
  );
};
