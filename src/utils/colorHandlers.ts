import { ColorItem } from "~/types";

export function fetchCustomColors(): string[] {
  const storedColors = localStorage.getItem("colors");
  if (storedColors === "undefined") {
    localStorage.setItem("colors", JSON.stringify([]));
    return [];
  }
  return JSON.parse(storedColors);
}

export function updateCustomColorsStorage(newColors: ColorItem[]): void {
  localStorage.setItem("colors", JSON.stringify(newColors));
}
export function removeCustomColors(): void {
  localStorage.setItem("colors", undefined);
  location.reload();
}
