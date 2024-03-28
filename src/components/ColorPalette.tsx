import { Text } from "~/ui";
import { ColorCard } from "./ColorCard";
import { getColorsByKey } from "~/utils/colorHandlers";

type Props = {
  colors?: string[];
  currentColor?: string;
};

export const ColorPalette = ({ colors }: Props) => {
  //? bad idea -> default colors would have to re-renders each time, but they not gonnaa change ever
  // useMemo here?
  const ColorsToRender = getColorsByKey("defaultColors");

  return (
    <section>
      <div className="color-list-wrapper">
        {ColorsToRender ? (
          ColorsToRender.map((clr) => <ColorCard cardColor={clr} key={clr} />)
        ) : (
          <Text
            content={
              "There is nothing to show, because filters are hiding everything"
            }
          />
        )}
      </div>
    </section>
  );
};
