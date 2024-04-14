import styles from "./ColorCard.module.css";
import { useMainContext } from "~/hooks/useMainContext";
import { Button, Text, CloseIcon } from "~/ui";

type Props = {
  cardColor: string;
  isDefault?: boolean;
  iconColor?: string;
};

export const ColorCard = ({ cardColor, isDefault }: Props) => {
  const { setCustomColors } = useMainContext();
  return (
    <>
      {cardColor && (
        <div className={styles.card} style={{ backgroundColor: cardColor }}>
          <Text style={{ color: cardColor ? cardColor : "inherit" }}>
            {cardColor}
          </Text>
          {isDefault || (
            <Button
              classes="close-btn"
              onClick={() =>
                setCustomColors((prevColors) =>
                  prevColors.filter(({ color }) => color !== cardColor)
                )
              }
              renderIcon={() => <CloseIcon />}
            />
          )}
        </div>
      )}
    </>
  );
};
