import styles from '~s/ui-styles.module.css';

type Props = {
  content: string;
};

export const Text = ({ content }: Props) => {
  return <p className={styles['filters-title']}>{content}</p>;
};
