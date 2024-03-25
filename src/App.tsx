// import Color from "color";
import { Container, Divider, Title } from "~/ui";
import { ColorPalette, SearchBlock, Filters } from "~c/";
import { MainContext } from "./mainContext";
import { GlobalKeyDownHandler } from "./logic/GlobalKeyDownHandler";
import { useStateInitializer } from "./hooks/useStateInitializer";

const DEFAULT_COLORS = [
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

function App() {
  const appState = useStateInitializer();
  return (
    <MainContext.Provider value={appState}>
      <GlobalKeyDownHandler />
      <Container>
        <Title />
        <Divider mb={1.35} />
        <div className="content-wrapper">
          <div className="menu-wrapper">
            <SearchBlock />
            <Filters />
          </div>
          <ColorPalette defaultColors={DEFAULT_COLORS} />
        </div>
      </Container>
    </MainContext.Provider>
  );
}

export default App;
