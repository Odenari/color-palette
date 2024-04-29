import Color from "color";
import styles from "./ColorPalette.module.css";
import DEFAULT_COLORS from "~/defaultColors";
import { useMainContext } from "~/hooks";
import { ColorCard } from "~c/";
import { Text } from "~/ui";
import { ReactNode, useMemo } from "react";
import { ColorItem } from "~/types";

export const ColorPalette = () => {
  const {
    currentColor,
    customColors,
    brightness,
    saturationFilters,
    luminosity
  } = useMainContext();

  let colors: ColorItem[] = useMemo(
    () => [...DEFAULT_COLORS, ...customColors],
    [customColors.length]
  );

  function filterColors(): void {
    switch (brightness) {
      case "All":
        break;
      case "Lightest":
        colors = colors.filter((item) => Color(item.color).isLight());
        break;
      case "Darkest":
        colors = colors.filter((item) => Color(item.color).isDark());
        break;
    }

    const { Red, Green, Blue } = saturationFilters;
    if (Red) {
      colors = colors.filter((item) => Color(item.color).red() > 255 / 2);
    }
    if (Green) {
      colors = colors.filter((item) => Color(item.color).green() > 255 / 2);
    }
    if (Blue) {
      colors = colors.filter((item) => Color(item.color).blue() > 255 / 2);
    }

    if (luminosity) {
      colors = colors.filter(
        (item) => Color(item.color).luminosity() >= luminosity
      );
    }
  }

  function renderColorCards(): ReactNode {
    console.log(currentColor);
    if (currentColor) {
      return (
        <div className={styles.singleItemWrapper}>
          <ColorCard
            cardColor={currentColor.color}
            isDefault={currentColor.isDefault}
          />
        </div>
      );
    }
    filterColors();
    if (!colors.length) {
      return (
        <Text className="widthFull flexCenter">
          There is nothing to show, because filters are hiding everything
        </Text>
      );
    }

    return Array.from(new Set(colors)).map(({ color, isDefault }) => (
      <ColorCard cardColor={color} key={color} isDefault={isDefault} />
    ));
  }

  return <div className={styles.wrapperPalette}>{renderColorCards()}</div>;
};
