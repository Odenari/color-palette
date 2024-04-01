import { InputErrors } from "~/types";
import styles from "./ErrorText.module.css";

type Props = {
  children: InputErrors;
};

export const ErrorText = ({ children }: Props) => {
  return <p className={styles.errorText}>{children}</p>;
};
