type Props = {
  mt?: number;
  mb?: number;
};

export const Divider = ({ mt, mb }: Props) => {
  console.log(`${mt}rem`);
  return (
    <div
      style={{
        width: '100%',
        marginTop: `${mt ? `${mt}rem` : ''}`,
        marginBottom: `${mb ? `${mb}rem` : ''}`,
        borderTop: '1px solid var(--border-color)',
        opacity: 0.6,
      }}
    />
  );
};
