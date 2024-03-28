import { Button, Text, TextInput } from "~/ui/";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import {
  setColorsToLocalStorage,
  submitInputValue
} from "~/utils/colorHandlers";
import { allowedSymbolsRegex } from "~/utils/validation";

type Props = {
  customColors: string[];
};

type Events = FormEvent | KeyboardEvent | MouseEvent<HTMLButtonElement>;

export const SearchBlock = ({ customColors }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.value.match(allowedSymbolsRegex)) {
      setInputValue(target.value.toUpperCase());
    }
    // Should I inform user if he enters incorrect values or caps lock or non latin?
  };

  const handleSubmit = (e: Events) => {
    e.preventDefault();
    const listToRender = submitInputValue(
      inputValue,
      customColors,
      setStatusMessage
    );
    if (listToRender) {
      setColorsToLocalStorage(listToRender);
      return;
    }
    throw new Error(
      "An unpredictable error has been detected. Please do your breathing practice to calm down and then refresh the page xD"
    );
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="search-wrapper">
      <TextInput
        id="colorInput"
        value={inputValue}
        onChange={handleChange}
        placeholder={"# Enter HEX color here..."}
        classes="color-input"
        aria-placeholder="input hex color code"
      />
      <Text content={statusMessage} />
      <div className="buttons-wrapper">
        <Button
          itemType="submit"
          onKeyUp={(e) => handleSubmit(e)}
          onClick={(e) => handleSubmit(e)}
        >
          Search
        </Button>
        <Button itemType="button" onClick={() => setInputValue("")}>
          Clear
        </Button>
      </div>
    </form>
  );
};
