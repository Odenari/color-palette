import { ColorItem } from "~/types";
import DEFAULT_COLORS from "~/defaultColors";

export function getColorsFromStorage(): ColorItem[] {
  const colors: string = localStorage.getItem("colors");
  let res: ColorItem[];
  try {
    res = JSON.parse(colors);
  } catch (err) {
    console.assert(res, "Somehow storage values can't be parsed.");
    return [];
  }
  if (!res) {
    console.info("The Storage is empty.");
    return [];
  }
  return res;
}

export function saveColorToStorage(value: ColorItem): void {
  const savedColors = getColorsFromStorage();
  const isColorExist = [...savedColors, ...DEFAULT_COLORS].some(
    (savedItem) => savedItem.color === value.color
  );
  if (isColorExist) {
    console.info("A color exists in the Storage.");
    localStorage.setItem("colors", JSON.stringify([...savedColors]));
    window.dispatchEvent(new Event("storage"));
    return;
  }
  localStorage.setItem("colors", JSON.stringify([...savedColors, value]));
  console.info("A color was added to the Storage.");
  window.dispatchEvent(new Event("storage"));
}

export function removeColorFromStorage(value: ColorItem): void {
  const savedColors = getColorsFromStorage();
  localStorage.setItem(
    "colors",
    JSON.stringify(savedColors.filter(({ color }) => color !== value.color))
  );
  console.info("A color has been removed from the Storage.");
  window.dispatchEvent(new Event("storage"));
}
