type Props = {
  text?: string;
};
export const Title = ({ text = "Color Palette" }: Props) => {
  return <h1>{text}</h1>;
};
