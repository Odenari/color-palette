import { DEFAULT_COLORS } from "~/App";
import { validateHEXcolor } from "./validation";
import { ColorLists, StateFn } from "~/types/types";

export function submitInputValue(
  colorValue: string,
  colorList: string[],
  setMessage: StateFn<string>
): string[] | undefined {
  if (!colorValue && !colorList.length) {
    throw new Error("Input Color and Color lists have to exist for submitting");
  } else if (!validateHEXcolor(colorValue)) {
    setMessage("Invalid color was provided. Please, try again.");
    throw new TypeError(
      "Color must be in HEX format -> #A1B8C3. The hashtag symbol ('#') may or may not be provided"
    );
  }

  const { defaultColors, customColors } = getAllColorsFromLocalStorage();
  const FilteredColors = [
    ...colorList,
    ...defaultColors
    // ...customColors
  ].filter((color) => color === colorValue);
  if (FilteredColors.length) {
    return FilteredColors;
  }

  //what am I doing here?!
  const oldLength = colorList.length;
  const newLength = colorList.push(colorValue);
  if (newLength > oldLength) {
    setMessage(`Color ${colorValue} was added`);
    return colorList;
  }

  return undefined;
}

/** Will always set defaultColors implicitly
 * @param customColors this are new colors which user adds by submiting color that does'not exist yet
 */
export function setColorsToLocalStorage(
  customColors: readonly string[] | undefined
) {
  localStorage.setItem(
    "colors",
    JSON.stringify({
      defaultColors: DEFAULT_COLORS,
      customColors: customColors
    })
  );
}

export function getAllColorsFromLocalStorage(): Record<ColorLists, string[]> {
  return JSON.parse(localStorage.getItem("colors"));
}

/**
 * @todo finish and aply in sumbmitInput fn
 * @param key - object name that distinguish lists of colors
 */
export function getColorsByKey(
  key: ColorLists,
  all?: boolean
): string[] | undefined {
  const allColors = JSON.parse(localStorage.getItem(`colors`));
  return allColors[key];
}

/**
 *
 * @param colors - list for filtering
 * @param filters - would have a narrowing effect on colors arg
 * @returns Array of possible colors or undefined
 */
export function applyFilters(
  colors: string[],
  filters?: { currentColor: string }
): string[] | string | undefined {
  if (!filters) {
    return colors;
  }
  const result = colors.filter((clr) => clr.includes(filters.currentColor));
  return undefined;
}
