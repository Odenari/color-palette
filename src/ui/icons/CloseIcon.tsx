type Props = {
  clr?: string;
};

export const CloseIcon = ({ clr }: Props) => {
  return (
    <svg
      viewBox="0 0 12 12"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="fill"
    >
      <line
        x1="1"
        y1="11"
        x2="11"
        y2="1"
        stroke={clr ? `${clr}` : "black"}
        strokeWidth="2"
      />
      <line
        x1="1"
        y1="1"
        x2="11"
        y2="11"
        stroke={clr ? `${clr}` : "black"}
        strokeWidth="2"
      />
    </svg>
  );
};
