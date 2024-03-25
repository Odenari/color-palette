import { HTMLAttributes } from "react";

type Props = {
  readonly children: string;
  onClick: () => void;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`default-button`}>
      {children}
    </button>
  );
};
