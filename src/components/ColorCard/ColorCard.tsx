import styles from "./ColorCard.module.css";
import { useMainContext } from "~/hooks/useMainContext";
import { Button, Text, CloseIcon } from "~/ui";
import Color from "color";

type Props = {
  cardColor: string;
  isDefault?: boolean;
};

export const ColorCard = ({ cardColor, isDefault }: Props) => {
  let negatedClr = "";
  let clr = Color(cardColor);
  const clrGroup = clr.keyword();

  if (clrGroup === "grey" || clrGroup === "gray") {
    negatedClr = clr.negate().lighten(0.75).hex();
  } else {
    negatedClr = clr.negate().darken(0.2).hex();
  }

  const { setCustomColors, setCurrentColor } = useMainContext();
  return (
    <div className={styles.card} style={{ backgroundColor: clr.toString() }}>
      <Text style={{ color: negatedClr }}>{cardColor}</Text>
      {isDefault || (
        <Button
          btnIconColor={negatedClr}
          style={{
            color: negatedClr
          }}
          classes="close-btn"
          onClick={() => {
            setCurrentColor(undefined);
            setCustomColors((prevColors) =>
              prevColors.filter(({ color }) => color !== cardColor)
            );
          }}
          renderIcon={() => <CloseIcon />}
        />
      )}
    </div>
  );
};
