type Props = {
  readonly children: string;
  onClick: () => void;
};

export const Button = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`default-button`}>
      {children}
    </button>
  );
};
