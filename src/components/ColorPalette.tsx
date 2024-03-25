import { Text } from '~/ui';
import { useMainContext } from '../hooks/useMainContext';

type Props = {
  defaultColors: readonly string[];
};

export const ColorPalette = ({ defaultColors }: Props) => {
  const { currentColor, isFiltersActive } = useMainContext();
  return (
    <section>
      <div>{currentColor}</div>
      <div>{`Filter state: ${isFiltersActive}`}</div>
      {defaultColors.map(color => {
        return <Text key={color} content={color}></Text>;
      })}
    </section>
  );
};
