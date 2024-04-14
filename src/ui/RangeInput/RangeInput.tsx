import styles from "./RangeInput.module.css";
import { InputHTMLAttributes } from "react";

type Props = {
  classes?: string;
  labelText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const RangeInput = ({ labelText, classes }: Props) => {
  return (
    <label className={`${classes ? classes : ""} ${styles.defaultStyles}`}>
      {labelText && <span>{labelText}</span>}
      <input type="range" min={0} max={1} step={0.001} />
    </label>
  );
};
