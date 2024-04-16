import styles from "./Button.module.css";
import { ButtonHTMLAttributes } from "react";

type Props = {
  readonly children?: string;
  renderIcon?: () => JSX.Element;
  classes?: string;
  btnIconColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  renderIcon,
  classes,
  btnIconColor,
  ...other
}: Props) => {
  return (
    <button
      className={`${styles.defaultButton} ${classes ? classes : ""}`}
      {...other}
    >
      {children && children}
      {renderIcon && (
        <span style={{ color: btnIconColor }}>{renderIcon()}</span>
      )}
    </button>
  );
};
