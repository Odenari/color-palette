import { ChangeEvent, HTMLAttributes } from "react";

type Props = {
  id: string;
  classes?: string;
  value?: string;
  /** pollymorphic input they say */
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  //   handleChange: React.Dispatch<React.SetStateAction<string>>;
  //   other?: HTMLAttributes<HTMLInputElement>;
};

export const TextInput = ({
  id,
  value,
  handleChange,
  classes
}: //   other
Props) => {
  return (
    <label className="inputLabel" htmlFor={id}>
      <input
        id={id}
        name={id}
        value={value}
        onChange={(e) => handleChange(e)}
        type="text"
        className={classes ? classes : "defaultInput"}
        // {...other}
      />
    </label>
  );
};
