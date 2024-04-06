import { HTMLAttributes, ReactNode } from "react";
import styles from "./Text.module.css";

type Props = {
  classes?: "success" | string;
  children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;

export const Text = ({ classes, children }: Props) => {
  return <p className={`${styles.default} ${classes}`}>{children}</p>;
};
