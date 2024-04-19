import { MainContext } from "./contexts/mainContext";
import { Container, Divider, Title } from "~/ui";
import { ColorPalette, ColorForm, Filters } from "~c/";
import { useStateInitializer } from "./hooks/useStateInitializer";

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
          </div>
          <ColorPalette />
        </div>
      </Container>
    </MainContext.Provider>
  );
}

export default App;
