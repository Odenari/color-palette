import { useEffect, useState } from "react";
import { getColorsFromStorage } from "~/utils/storeManager";
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
  const [customColors, setCustomColors] =
    useState<ColorItem[]>(getColorsFromStorage);
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

  // will reinit custom colors on every tab
  useEffect(() => {
    function onStorage() {
      setCustomColors(getColorsFromStorage);
    }
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
    };
  }, [customColors]);

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
