import { useState } from 'react';

export const useStateInitializer = () => {
  const [color, setColor] = useState('');
  const [isFiltersActive, setFiltersActivity] = useState(false);
  const [redValue, setRedValue] = useState(false);
  return {
    currentColor: color,
    setColor: setColor,
    isFiltersActive: isFiltersActive,
    toggleFiltersActivity: setFiltersActivity,
    redValue: redValue,
    setRedValue: setRedValue,
  };
};
