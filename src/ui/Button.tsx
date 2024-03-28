import { HTMLAttributes, MouseEvent } from "react";

type Props = {
  readonly children?: string;
  renderIcon?: () => JSX.Element;
  classes?: string;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, renderIcon, onClick, classes }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`default-button ${classes ? classes : ""}`}
    >
      {children && children}
      {renderIcon && <span>{renderIcon()}</span>}
    </button>
  );
};
