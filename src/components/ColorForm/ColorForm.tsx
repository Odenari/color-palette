import styles from "./ColorForm.module.css";
import DEFAULT_COLORS from "~/defaultColors";
import { Button, TextInput } from "~/ui/";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { useKeyHandler, useClearAll, useMainContext } from "~/hooks/";
import {
  addHashtag,
  allowedSymbolsRegex,
  validateHEXcolor,
  saveColorToStorage
} from "~/utils";

type Events = FormEvent | KeyboardEvent | MouseEvent<HTMLButtonElement>;

export const ColorForm = () => {
  const {
    customColors,
    setCurrentColor,
    setCustomColors,
    colorInputError,
    setColorInputError,
    statusMessage,
    setStatusMessage
  } = useMainContext();
  const clearAll = useClearAll();
  const [inputValue, setInputValue] = useState("");
  useKeyHandler({ key: "Escape", clearFn: setInputValue });

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
        ({ color }) => color === addHashtag(inputValue)
      );
      if (isColorExist) {
        setStatusMessage("Color exists");
        return;
      } else {
        setStatusMessage("Color was added");
        return [...prevColors, { color: addHashtag(inputValue) }];
      }
    });

    setCurrentColor({
      color: addHashtag(inputValue),
      isDefault: DEFAULT_COLORS.some(({ color }) => color === inputValue)
    });
    saveColorToStorage({ color: addHashtag(inputValue) });
  }

  const handleClearBtn = () => {
    setInputValue("");
    clearAll();
  };

  return (
    <>
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
