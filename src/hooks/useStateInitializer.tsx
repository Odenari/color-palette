import { useState } from "react";
import { Color } from "~/types";

export const useStateInitializer = () => {
  const [color, setColor] = useState("");
  const [isFiltersActive, setFiltersActivity] = useState(false);
  const [customColors, setCustomColors] = useState<Color[]>([]);
  const [redValue, setRedValue] = useState(false);
  return {
    currentColor: color,
    setCurrentColor: setColor,
    isFiltersActive: isFiltersActive,
    toggleFiltersActivity: setFiltersActivity,
    redValue: redValue,
    setRedValue: setRedValue,
    customColors: customColors,
    setCustomColors: setCustomColors
  };
};
