import { useEffect } from 'react';
import { useMainContext } from '~/hooks/useMainContext';
import { clearAllFilters } from '~/utils/clearAllFilters';

export const GlobalKeyDownHandler = () => {
  const { setColor, toggleFiltersActivity } = useMainContext();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // todo finish clear functional
        clearAllFilters({ setColor, toggleFiltersActivity });
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  return null;
};
