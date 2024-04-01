import { Color } from "~/types";

export function fetchCustomColors(): string[] {
  const storedColors = localStorage.getItem("colors");
  if (storedColors === "undefined") {
    localStorage.setItem("colors", JSON.stringify([]));
    return [];
  }
  return JSON.parse(storedColors);
}

export function updateCustomColors(newColors: Color[]): void {
  localStorage.setItem("colors", JSON.stringify(newColors));
}
export function removeCustomColors(): void {
  localStorage.setItem("colors", undefined);
  location.reload();
}
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
