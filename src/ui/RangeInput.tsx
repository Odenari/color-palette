import React from 'react';

type Props = {
  labelText?: string;
};

export const RangeInput = ({ labelText = 'Luminosity' }: Props) => {
  return (
    <label className='luminosity-outer'>
      {labelText && <span>{labelText}</span>}
      <input type='range' />
    </label>
  );
};
