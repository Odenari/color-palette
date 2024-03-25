import { useMainContext } from "~/hooks/useMainContext";
import { Button } from "~/ui/Button";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import { TextInput } from "../ui/TextInput";
import styles from "~s/color-input.module.css";
import {
  validateHEXcolor,
  allowedSymbolsRegex
} from "~/utils/validateHEXcolor";

export const SearchBlock = () => {
  const { currentColor, setColor } = useMainContext();

  const [dirtyColor, setDirtyColor] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    // condition will skip any undesirable symbols
    if (!allowedSymbolsRegex.test(value)) {
      return;
    }
    setDirtyColor(value.toUpperCase());
  };

  const handleClick = () => {
    if (validateHEXcolor(dirtyColor)) {
      setColor(dirtyColor);
    } else {
      console.log("Color has invalid format");
    }
  };

  return (
    <section className="search-wrapper">
      <TextInput
        id="colorInput"
        value={dirtyColor}
        onChange={handleChange}
        placeholder={"# Enter HEX color here..."}
        classes={styles["color-input"]}
        aria-placeholder="input hex color code"
      />
      <div className="buttons-wrapper">
        <Button onClick={handleClick}>Search</Button>
        <Button onClick={() => setColor("")}>Clear</Button>
      </div>
    </section>
  );
};
