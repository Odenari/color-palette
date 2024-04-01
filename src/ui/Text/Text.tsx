import { HTMLAttributes, ReactNode } from "react";
import styles from "./Text.module.css";

type Props = {
  classes?: "success" | string;
  children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;

export const Text = ({ classes, children }: Props) => {
  console.log("CLASSES -> ", classes);
  return (
    <p className={`${styles.default} ${classes && styles[classes]}`}>
      {children}
    </p>
  );
};
