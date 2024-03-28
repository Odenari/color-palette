import { useState } from "react";

export const useStateInitializer = () => {
  const [color, setColor] = useState("");
  const [isFiltersActive, setFiltersActivity] = useState(false);
  const [colorList, setColorList] = useState<string[]>([]);
  const [redValue, setRedValue] = useState(false);
  return {
    currentColor: color,
    setCurrentColor: setColor,
    isFiltersActive: isFiltersActive,
    toggleFiltersActivity: setFiltersActivity,
    redValue: redValue,
    setRedValue: setRedValue,
    colorList: colorList,
    setColorList: setColorList
  };
};
