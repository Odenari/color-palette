import { ButtonHTMLAttributes, HTMLAttributes, MouseEvent } from "react";

type Props = {
  readonly children?: string;
  renderIcon?: () => JSX.Element;
  classes?: string;
  btnIconColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  renderIcon,
  onClick,
  classes,
  btnIconColor,
  ...other
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`default-button ${classes ? classes : ""}`}
      {...other}
    >
      {children && children}
      {renderIcon && (
        <span style={{ color: btnIconColor }}>{renderIcon()}</span>
      )}
    </button>
  );
};
