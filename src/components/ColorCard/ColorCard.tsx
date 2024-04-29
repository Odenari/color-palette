import Color from "color";
import styles from "./ColorCard.module.css";
import { useMainContext } from "~/hooks/useMainContext";
import { Button, Text, CloseIcon } from "~/ui";
import { removeColorFromStorage } from "~/utils";

type Props = {
  cardColor: string;
  isDefault?: boolean;
};

export const ColorCard = ({ cardColor, isDefault }: Props) => {
  let negatedClr = "";
  let clr = Color(cardColor);
  const clrTone = clr.keyword();

  // edge case => negating of grayish colors kinda meaningless
  if (clrTone === "grey" || clrTone === "gray") {
    negatedClr = clr.negate().lighten(0.75).hex();
  } else {
    negatedClr = clr.negate().darken(0.2).hex();
  }

  const { setCustomColors, setCurrentColor } = useMainContext();
  return (
    <div className={styles.card} style={{ backgroundColor: clr.toString() }}>
      <Text style={{ color: negatedClr }}>{cardColor}</Text>
      {isDefault ? null : (
        <Button
          btnIconColor={negatedClr}
          classes="close-btn"
          onClick={() => {
            setCurrentColor(undefined);
            removeColorFromStorage({ color: cardColor });
            setCustomColors((prevColors) =>
              prevColors.filter(({ color }) => color !== cardColor)
            );
          }}
          renderIcon={() => <CloseIcon clr={negatedClr} />}
        />
      )}
    </div>
  );
};
