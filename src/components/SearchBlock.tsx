import { useMainContext } from '~/hooks/useMainContext';
import { Button } from '~/ui/Button';
import { ChangeEvent } from 'react';
import { TextInput } from '../ui/TextInput';
import styles from '~s/color-input.module.css';

export const SearchBlock = () => {
  const { currentColor, setColor } = useMainContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // todo validate string for hex code | template literal?
    setColor(e.target.value.toUpperCase());
  };

  return (
    <section className='search-wrapper'>
      <TextInput
        id='colorInput'
        value={currentColor}
        onChange={handleChange}
        placeholder={'Enter HEX color here...'}
        classes={styles['color-input']}
        aria-placeholder='enter hex color code'
      />
      <div className='buttons-wrapper'>
        <Button onClick={() => console.log('SEARCH')}>Search</Button>
        <Button onClick={() => setColor('')}>Clear</Button>
      </div>
    </section>
  );
};
