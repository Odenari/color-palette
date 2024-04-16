import styles from "./ColorForm.module.css";
import { Button, TextInput } from "~/ui/";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import {
  addHashtag,
  allowedSymbolsRegex,
  validateHEXcolor,
  updateCustomColorsStorage
} from "~/utils";
import { useMainContext } from "~/hooks/useMainContext";
import { KeyHandler } from "~/logic/KeyDownHandler";
import DEFAULT_COLORS from "~/defaultColors";
import { useClearAll } from "~/hooks/useClearAll";

type Events = FormEvent | KeyboardEvent | MouseEvent<HTMLButtonElement>;

export const ColorForm = () => {
  const {
    setCurrentColor,
    setCustomColors,
    customColors,
    colorInputError,
    setColorInputError,
    statusMessage,
    setStatusMessage
  } = useMainContext();
  const clearAll = useClearAll();
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setColorInputError(undefined);
    setStatusMessage(undefined);
    if (target.value.match(allowedSymbolsRegex)) {
      setInputValue(target.value.toUpperCase());
    }
  };

  const handleSubmit = (e: Events) => {
    e.preventDefault();
    submitInputValue();
  };

  function submitInputValue() {
    if (!inputValue) {
      setColorInputError("Color was not provided");
      return;
    }
    if (!validateHEXcolor(addHashtag(inputValue))) {
      setColorInputError("Invalid color. Please, try again.");
      return;
    }

    setCustomColors((prevColors) => {
      const isColorExist = [...DEFAULT_COLORS, ...prevColors].some(
        ({ color }) => color === inputValue
      );
      if (isColorExist) {
        setStatusMessage("Color exists");
      } else {
        setStatusMessage("Color was added");
        prevColors.push({ color: addHashtag(inputValue) });
      }
      return prevColors;
    });
    setCurrentColor({ color: addHashtag(inputValue) });
    updateCustomColorsStorage(customColors);
  }

  const handleClearBtn = () => {
    setInputValue("");
    clearAll();
  };

  return (
    <>
      <KeyHandler searchInputSetter={setInputValue} />
      <form onSubmit={(e) => handleSubmit(e)} className={styles.wrapper}>
        <TextInput
          id="colorInput"
          value={inputValue}
          onChange={handleChange}
          error={colorInputError}
          className={styles.searchInput}
          submitStatus={statusMessage}
          placeholder={"# Enter HEX color here..."}
          aria-placeholder="input for hex color code"
        />
        <div className="buttons-wrapper">
          <Button
            type="submit"
            onKeyUp={(e) => handleSubmit(e)}
            onSubmit={(e) => handleSubmit(e)}
          >
            Search
          </Button>
          <Button type="button" onClick={handleClearBtn}>
            Clear
          </Button>
        </div>
      </form>
    </>
  );
};
