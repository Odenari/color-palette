import Color from "color";
import { Container } from "./components/ui/Container";
import { Divider } from "./components/ui/Divider";
import { TextInput } from "./components/ui/Input";
import { MainContextProvider } from "./hooks/useContext";
import { useState } from "react";
import { Title } from "./components/Title";

enum defaultColors {
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
}

function App() {
  const clr = Color();
  const [color, setColor] = useState("");
  const [isFiltersActive, setFiltersActive] = useState(false);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.currentTarget.value);
  };
  return (
    <MainContextProvider values={{ currentColor: color, isFiltersActive }}>
      <Container>
        <Title />
        <Divider />
        <TextInput
          id="colorInput"
          value={color}
          handleChange={(e) => setColor(e.currentTarget.value)}
        />
      </Container>
    </MainContextProvider>
  );
}

export default App;
