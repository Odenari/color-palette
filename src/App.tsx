import Color from "color";
import { MainContext } from "./mainContext";
import { Container, Divider, Title } from "~/ui";
import { ColorPalette, SearchBlock, Filters } from "~c/";
import { GlobalKeyDownHandler } from "./logic/GlobalKeyDownHandler";
import { useStateInitializer } from "./hooks/useStateInitializer";
import { setColorsToLocalStorage } from "./utils/colorHandlers";

export const DEFAULT_COLORS = [
  "#03224C",
  "#FFC0CB",
  "#808080",
  "#00FF00",
  "#ADD8E6",
  "#FFA500",
  "#663399",
  "#30D5C8",
  "#8B0000",
  "#FFD700"
] as const;

const clr = new Color(DEFAULT_COLORS[7]);

setColorsToLocalStorage(undefined);

function App() {
  const appState = useStateInitializer();
  const { currentColor, setCurrentColor, colorList } = appState;
  return (
    <MainContext.Provider value={appState}>
      <GlobalKeyDownHandler />
      <Container>
        <Title />
        <Divider mb={1.35} />
        <div className="content-wrapper">
          <div className="menu-wrapper">
            <SearchBlock customColors={appState.colorList} />
            <Filters />
          </div>
          <ColorPalette colors={colorList} />
        </div>
      </Container>
    </MainContext.Provider>
  );
}

export default App;
