import Color from "color";
import { MainContext } from "./contexts/mainContext";
import { Container, Divider, Title } from "~/ui";
import { ColorPalette, ColorForm, Filters } from "~c/";
import { useStateInitializer } from "./hooks/useStateInitializer";
// temp functionality
import { removeCustomColors } from "./utils";

function App() {
  const appState = useStateInitializer();

  return (
    <MainContext.Provider value={appState}>
      <Container>
        <Title />
        <Divider mb={1.35} />
        <div className="content-wrapper">
          <div className="menu-wrapper">
            <ColorForm />
            <Filters />
            <button onClick={removeCustomColors}>REMOVE & REFRESH</button>
          </div>
          <ColorPalette />
        </div>
      </Container>
    </MainContext.Provider>
  );
}

export default App;
