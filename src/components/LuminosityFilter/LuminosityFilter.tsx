import styles from "./LuminosityFilter.module.css";
import { useMainContext } from "~/hooks/useMainContext";
import { RangeInput } from "~/ui";

type Props = {
  disabled: boolean;
};

export const LuminosityFilter = ({ disabled }: Props) => {
  const { luminosity, setLuminosity } = useMainContext();
  return (
    <div className={styles.wrapper}>
      <RangeInput
        value={luminosity}
        labelText="Luminosity"
        disabled={disabled}
        className="flexCenter"
        onChange={(e) => {
          e.preventDefault();
          setLuminosity(Number(e.target.value));
        }}
      />
    </div>
  );
};
