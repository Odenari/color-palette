import styles from "./TextInput.module.css";
import { ColorSubmitStatus, InputErrors } from "~/types";
import { HTMLAttributes } from "react";
import { ErrorText, Text } from "~/ui/";

type Props = {
  id: string;
  labelText?: string;
  classes?: string;
  value?: string;
  placeholder?: string;
  error?: InputErrors;
  submitStatus?: ColorSubmitStatus;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
} & HTMLAttributes<HTMLInputElement>;

export const TextInput = ({
  id,
  value,
  onChange,
  classes,
  error,
  submitStatus,
  labelText,
  placeholder
}: Props) => {
  return (
    <>
      <label className="w-full" htmlFor={id}>
        {labelText && <span>{labelText}</span>}
        <input
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          type="text"
          className={`
          ${styles.defaultInput} ${error && styles.errorInput} ${classes}`}
          placeholder={placeholder ? placeholder : "Enter your data"}
          required
          maxLength={7}
          autoComplete="off"
          title="Find existing color in HEX format or add new one"
        />
      </label>
      {error && <ErrorText>{error}</ErrorText>}
      {submitStatus && <Text classes="success">{submitStatus}</Text>}
    </>
  );
};
