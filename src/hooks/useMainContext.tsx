import { useContext } from 'react';
import { MainContext } from '../MainContext';

export const useMainContext = () => {
  const context = useContext(MainContext);
  /** throwing here would be a better idea or not? */
  console.assert(
    !!context,
    new Error('Main Context cannot be empty or nullish')
  );
  return context;
};
