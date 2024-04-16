import styles from "./Container.module.css";
import { HTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Container = ({ children, ...other }: Props) => {
  return (
    <div className={styles.container} {...other}>
      {children}
    </div>
  );
};
