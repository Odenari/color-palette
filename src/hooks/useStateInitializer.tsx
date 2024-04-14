import { useState } from "react";
import { FilterByBrightness, SaturationFilter } from "~/types";

export type MainContextType = ReturnType<typeof useStateInitializer>;

export const useStateInitializer = () => {
  const [isFiltersActive, toggleFiltersActivity] = useState(false);
  const [currentColor, setCurrentColor] = useState(undefined);
  const [customColors, setCustomColors] = useState([]);
  const [colorInputError, setColorInputError] = useState(undefined);
  const [statusMessage, setStatusMessage] = useState(undefined);
  const [brightness, setBrightness] = useState<FilterByBrightness>("All");
  const [saturatuionFilters, setSaturationFilters] = useState<SaturationFilter>(
    { Red: false, Green: false, Blue: false }
  );
  const [luminosity, setLuminosity] = useState(0);

  return {
    currentColor,
    setCurrentColor,
    isFiltersActive,
    toggleFiltersActivity,
    customColors,
    setCustomColors,
    colorInputError,
    setColorInputError,
    statusMessage,
    setStatusMessage,
    brightness,
    setBrightness,
    saturatuionFilters,
    setSaturationFilters,
    luminosity,
    setLuminosity
  };
};
