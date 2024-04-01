import { Button, TextInput } from "~/ui/";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import {
  updateCustomColors,
  addHashtag,
  allowedSymbolsRegex,
  validateHEXcolor
} from "~/utils";
import { ColorSubmitStatus, InputErrors } from "~/types";
import { useMainContext } from "~/hooks/useMainContext";
import { KeyHandler } from "~/logic/KeyDownHandler";
import DEFAULT_COLORS from "~/defaultColors";
type Events = FormEvent | KeyboardEvent | MouseEvent<HTMLButtonElement>;

export const ColorForm = () => {
  const { setCurrentColor, setCustomColors, customColors } = useMainContext();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<InputErrors>("");
  const [statusMessage, setStatusMessage] = useState<ColorSubmitStatus>("");

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setError("");
    setStatusMessage("");
    if (target.value.match(allowedSymbolsRegex)) {
      setInputValue(target.value.toUpperCase());
    }
  };

  const handleSubmit = (e: Events) => {
    e.preventDefault();
    submitInputValue();
  };

  // TODO create usePersistentColors hook to manage localStorage colors
  function submitInputValue() {
    if (!inputValue) {
      setError("Color wasn't provided");
      return;
    }
    setInputValue(addHashtag(inputValue));
    if (!validateHEXcolor(inputValue)) {
      setError("Invalid color. Please, try again.");
      return;
    }

    setCurrentColor(inputValue);
    setCustomColors((prevColors) => {
      [...DEFAULT_COLORS, ...prevColors].some(
        ({ color }) => color === inputValue
      )
        ? setStatusMessage("Color exists")
        : setStatusMessage("Color was added");
      return [{ color: inputValue }];
    });
    updateCustomColors(customColors);
  }

  return (
    <>
      <KeyHandler clearInput={setInputValue} />
      <form onSubmit={(e) => handleSubmit(e)} className="search-wrapper">
        <TextInput
          id="colorInput"
          value={inputValue}
          onChange={handleChange}
          error={error}
          submitStatus={statusMessage}
          placeholder={"# Enter HEX color here..."}
          aria-placeholder="input for hex color code"
        />
        <div className="buttons-wrapper">
          <Button
            itemType="submit"
            onKeyUp={(e) => handleSubmit(e)}
            onClick={(e) => handleSubmit(e)}
          >
            Search
          </Button>
          <Button onClick={() => setInputValue("")}>Clear</Button>
        </div>
      </form>
    </>
  );
};
