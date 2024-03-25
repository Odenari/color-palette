import type { StateFn } from '~/types/types';

type Props = {
  id: string;
  checked: boolean;
  labelText?: string;
  handleChange: StateFn<boolean>;
};

export const Checkbox = ({ id, checked, handleChange, labelText }: Props) => {
  return (
    <label>
      <input
        id={id}
        name={id}
        type='checkbox'
        checked={checked}
        onChange={() => handleChange(!checked)}
      />
      {labelText && <span>{labelText}</span>}
    </label>
  );
};
