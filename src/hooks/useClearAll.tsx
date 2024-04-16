import { useMainContext } from "./useMainContext";

export const useClearAll = () => {
  const {
    setCurrentColor,
    setColorInputError,
    setStatusMessage,
    setBrightness,
    setSaturationFilters,
    setLuminosity
  } = useMainContext();

  return () => {
    setCurrentColor(undefined);
    setColorInputError(undefined);
    setStatusMessage(undefined);
    setBrightness("All");
    setSaturationFilters({ Red: false, Green: false, Blue: false });
    setLuminosity(0);
  };
};
