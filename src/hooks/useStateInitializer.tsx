import { useState } from "react";
import { Color, ColorSubmitStatus, InputErrors } from "~/types";

export const useStateInitializer = () => {
  const [currentColor, setCurrentColor] = useState<Color | undefined>(
    undefined
  );
  const [isFiltersActive, setFiltersActivity] = useState(false);
  const [customColors, setCustomColors] = useState<Color[]>([]);
  const [colorInputError, setColorInputError] = useState<InputErrors>("");
  const [statusMessage, setStatusMessage] = useState<ColorSubmitStatus>("");
  return {
    currentColor: currentColor,
    setCurrentColor: setCurrentColor,
    isFiltersActive: isFiltersActive,
    toggleFiltersActivity: setFiltersActivity,
    customColors: customColors,
    setCustomColors: setCustomColors,
    colorInputError: colorInputError,
    setColorInputError: setColorInputError,
    statusMessage: statusMessage,
    setStatusMessage: setStatusMessage
  };
};
