import { useMainContext } from '~/hooks/useMainContext';
import { Input, RangeInput } from '~/ui';
import { RadioGroup, RGBGroup } from '~c/';

export const Filters = () => {
  const { isFiltersActive, toggleFiltersActivity } = useMainContext();

  return (
    <section className='filters-wrapper'>
      <Input
        type='checkbox'
        id='enableFilters'
        disabled={false}
        checked={isFiltersActive}
        labelText='Enable Filters'
        stateSetter={toggleFiltersActivity}
      />
      {isFiltersActive && (
        <div>
          <p className='filters-title'>Choose from options: </p>
          <RadioGroup />
          <RGBGroup />
          <RangeInput />
        </div>
      )}
    </section>
  );
};
