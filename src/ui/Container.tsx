import { ReactNode } from "react";

type Props = {
  /** Confihured by styles for now*/
  other?: HTMLDivElement;
  children: ReactNode;
};

export const Container = ({ children, ...other }: Props) => {
  return (
    <div className="container" {...other}>
      {children}
    </div>
  );
};
