import style from "./ColorPalette.module.css";
import DEFAULT_COLORS from "~/defaultColors";
import { Text } from "~/ui";
import { ColorCard } from "../ColorCard/ColorCard";
import { useMainContext } from "~/hooks/useMainContext";
import type { Color } from "~/types";

type Props = {
  filters?: {
    all: "showAll";
  };
};

export const ColorPalette = ({ filters }: Props) => {
  const { currentColor, customColors } = useMainContext();
  return (
    <div className={style.wrapperPalette}>
      {renderColorCards(customColors, currentColor) || (
        <Text>
          There is nothing to show, because filters are hiding everything
        </Text>
      )}
    </div>
  );
};

function renderColorCards(colors: Color[], currentColor?: Color) {
  if (currentColor) {
    return <ColorCard isDefault={false} cardColor={currentColor.color} />;
  }

  return [...DEFAULT_COLORS, ...(colors.length ? colors : [])].map(
    ({ color, isDefault }) => (
      <ColorCard cardColor={color} key={color} isDefault={isDefault} />
    )
  );
}
