import { ChangeEvent, HTMLAttributes } from 'react';
import styles from '~s/ui-styles.module.css';
import { StateFn } from '~/types';
import { exhaustiveCheck } from '~/utils/exhaustiveCheck';

type AllowedInputs = 'checkbox' | 'range' | 'radio';

type Props = {
  id: string;
  type: AllowedInputs;
  value?: string | number;
  name?: string;
  labelText?: string;
  checked?: boolean;
  classesOuter?: string;
  classesInput?: string;
  stateSetter: StateFn<string | number | boolean>;
  disabled: boolean;
} & HTMLAttributes<HTMLInputElement>;

export const Input = ({
  id,
  name,
  type,
  labelText,
  classesOuter,
  classesInput,
  value,
  checked,
  stateSetter,
  disabled,
}: Props) => {
  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    switch (type) {
      case 'checkbox':
        stateSetter(!checked);
        break;
      case 'radio':
        console.log('RADIO HANDLER');
        stateSetter(e.target.value);
        break;
      case 'range':
        console.log('Range Handler');
        stateSetter(e.target.value);
        break;
      default:
        exhaustiveCheck(type);
        return;
    }
  };

  return (
    <label
      className={`${styles['default-non-text-input']} ${
        classesOuter ? classesOuter : ''
      }`}
      htmlFor={name && name}
    >
      <input
        className={`${classesInput ? classesInput : ''}`}
        type={type}
        name={name ? name : id}
        value={value}
        checked={checked}
        onChange={handler}
        disabled={disabled}
      />
      {labelText && <span>{labelText}</span>}
    </label>
  );
};
