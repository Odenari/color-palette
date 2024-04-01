import { Button, Text } from "~/ui";
import { CloseIcon } from "~/ui/CloseIcon";

type Props = {
  cardColor: string;
  isDefault?: boolean;
  iconColor?: string;
};

export const ColorCard = ({ cardColor, isDefault }: Props) => {
  return (
    <>
      {cardColor && (
        <div className="color-card" style={{ backgroundColor: cardColor }}>
          <Text style={{ color: cardColor ? cardColor : "inherit" }}>
            {cardColor}
          </Text>
          {isDefault || (
            <Button
              classes="close-btn"
              onClick={() => console.log("click")}
              renderIcon={() => (
                <span className="delete-icon">
                  <CloseIcon />
                </span>
              )}
            />
          )}
        </div>
      )}
    </>
  );
};
