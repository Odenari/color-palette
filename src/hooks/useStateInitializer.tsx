import { useState } from "react";
import {
  ColorItem,
  ColorSubmitStatus,
  FilterByBrightness,
  InputErrors,
  SaturationFilter
} from "~/types";

export type MainContextType = ReturnType<typeof useStateInitializer>;

export const useStateInitializer = () => {
  const [isFiltersActive, toggleFiltersActivity] = useState(false);
  const [currentColor, setCurrentColor] = useState<ColorItem>();
  const [customColors, setCustomColors] = useState<ColorItem[]>([]);
  const [colorInputError, setColorInputError] =
    useState<InputErrors>(undefined);
  const [statusMessage, setStatusMessage] =
    useState<ColorSubmitStatus>(undefined);
  const [brightness, setBrightness] = useState<FilterByBrightness>("All");
  const [saturationFilters, setSaturationFilters] = useState<SaturationFilter>({
    Red: false,
    Green: false,
    Blue: false
  });
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
    saturationFilters,
    setSaturationFilters,
    luminosity,
    setLuminosity
  };
};
