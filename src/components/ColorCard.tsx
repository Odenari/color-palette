import { Button } from "~/ui";
import { CloseIcon } from "~/ui/CloseIcon";

type Props = {
  cardColor: string;
  textColor?: string;
  iconColor?: string;
};

export const ColorCard = ({ cardColor, textColor }: Props) => {
  return (
    <div className="color-card" style={{ backgroundColor: cardColor }}>
      <p style={{ color: textColor ? textColor : "inherit" }}>{cardColor}</p>
      <Button
        classes="close-btn"
        onClick={() => console.log("click")}
        renderIcon={() => (
          <span className="delete-icon">
            <CloseIcon />
          </span>
        )}
      />
    </div>
  );
};
