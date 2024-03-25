import { useMainContext } from '~/hooks/useMainContext';
import { Text, Checkbox } from '~/ui';

export const RGBGroup = () => {
  const { redValue, setRedValue } = useMainContext();
  return (
    <div className='filters-group-outer'>
      <Text content='RGB values: ' />
      <div className='filters-group-inner'>
        <Checkbox
          id='redCheckbox'
          checked={redValue}
          labelText='Red over 50%'
          handleChange={setRedValue}
        />
        <Checkbox
          id='greenCheckbox'
          checked={redValue}
          labelText='Red over 50%'
          handleChange={setRedValue}
        />
        <Checkbox
          id='blueCheckbox'
          checked={redValue}
          labelText='Red over 50%'
          handleChange={setRedValue}
        />
      </div>
    </div>
  );
};
