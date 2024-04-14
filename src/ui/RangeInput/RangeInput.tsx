import styles from "./RangeInput.module.css";
import { InputHTMLAttributes } from "react";

type Props = {
  labelText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const RangeInput = ({ labelText, ...other }: Props) => {
  return (
    <label className={`${styles.defaultStyles}`}>
      {labelText && <span>{labelText}</span>}
      <input type="range" min={0} max={1} step={0.001} {...other} />
    </label>
  );
};
