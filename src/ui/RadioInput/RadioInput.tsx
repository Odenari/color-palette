import { FilterByBrightness } from "~/types";
import styles from "./RadioInput.module.css";
import { HTMLAttributes, InputHTMLAttributes } from "react";

type Props = {
  labelText: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const RadioInput = ({ labelText, name, ...other }: Props) => {
  return (
    <label className={styles.wrapper} htmlFor={name}>
      <input type="radio" {...other} />
      {labelText && <span className={styles.label}>{labelText}</span>}
    </label>
  );
};
