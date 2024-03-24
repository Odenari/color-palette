import { useMainContext } from '../hooks/useMainContext';

export const ColorPalette = () => {
  const { currentColor } = useMainContext();
  return <div>{currentColor}</div>;
};
