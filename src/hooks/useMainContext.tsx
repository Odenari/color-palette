import { useContext, ReactNode } from 'react';
import { MainContext } from '../mainContext';
// import type { ContextProps } from '../types/types.ts';

export interface ContextProps {
  setColor: () => void;
  currentColor: string;
  isFiltersActive: boolean;
}

export interface ContextProps {
  luminosity?: number;
  showAll?: boolean;
  showDarkest?: boolean;
  showLightest?: boolean;
  isMoreRed?: boolean;
  isMoreGreen?: boolean;
  isMoreBlue?: boolean;
}

export const useMainContext = () => {
  const context = useContext(MainContext);
  /** mb throwing here would be a better idea */
  console.assert(!!context, new Error('Main Context cannot be empty'));
  return context;
};
