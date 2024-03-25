import { HTMLAttributes } from 'react';
import styles from '~s/ui-styles.module.css';
type Props = {
  name: string;
  labelText: string;
} & HTMLAttributes<HTMLInputElement>;

export const RadioInput = ({ labelText }: Props) => {
  return (
    <label className={styles['radio-input-outer']}>
      <input type='radio' name='filterByBrightness' />
      {labelText && <span>{labelText}</span>}
    </label>
  );
};
