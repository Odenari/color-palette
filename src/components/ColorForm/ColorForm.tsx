import styles from "./ColorForm.module.css";
import { Button, TextInput } from "~/ui/";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import {
  updateCustomColors,
  addHashtag,
  allowedSymbolsRegex,
  validateHEXcolor
} from "~/utils";
import { useMainContext } from "~/hooks/useMainContext";
import { KeyHandler } from "~/logic/KeyDownHandler";
import DEFAULT_COLORS from "~/defaultColors";
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
    submitInputValue(e);
  };

  // TODO create usePersistentColors hook to manage localStorage colors
  function submitInputValue(event: Events) {
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
        prevColors.push({ color: inputValue });
      }
      return prevColors;
    });
    setCurrentColor({ color: inputValue });
    updateCustomColors(customColors);
  }

  return (
    <>
      <KeyHandler clearInput={setInputValue} />
      <form onSubmit={(e) => handleSubmit(e)} className={styles.wrapper}>
        <TextInput
          id="colorInput"
          value={inputValue}
          onChange={handleChange}
          error={colorInputError}
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
          <Button
            type="button"
            onClick={() => {
              setInputValue("");
              setColorInputError(undefined);
              setStatusMessage(undefined);
              setCurrentColor(undefined);
            }}
          >
            Clear
          </Button>
        </div>
      </form>
    </>
  );
};
