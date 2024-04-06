import { HTMLAttributes, MouseEvent } from "react";

type Props = {
  readonly children?: string;
  renderIcon?: () => JSX.Element;
  classes?: string;
  type?: "submit" | "button";
} & HTMLAttributes<HTMLButtonElement>;

export const Button = ({
  type,
  children,
  renderIcon,
  onClick,
  classes
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`default-button ${classes ? classes : ""}`}
    >
      {children && children}
      {renderIcon && <span>{renderIcon()}</span>}
    </button>
  );
};
