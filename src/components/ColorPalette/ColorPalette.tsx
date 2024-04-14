import style from "./ColorPalette.module.css";
import DEFAULT_COLORS from "~/defaultColors";
import { Text } from "~/ui";
import { ColorCard } from "~c/ColorCard";
import { Color } from "~/types";
import { useMainContext } from "~/hooks/useMainContext";

export const ColorPalette = () => {
  const { currentColor, customColors, filters } = useMainContext();
  console.log("Filters inside ColorPalette -> ", filters);
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
