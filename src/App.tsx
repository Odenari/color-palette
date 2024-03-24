// import Color from "color";
import { Container } from './components/ui/Container';
import { Divider } from './components/ui/Divider';
import { useState } from 'react';
import { Title } from './components/Title';
import { MainContext } from './mainContext';
import { ColorPalette } from './components/ColorPalette';
import { SearchBlock } from './components/SearchBlock';
// enum defaultColors {
//   '#03224C',
//   '#FFC0CB',
//   '#808080',
//   '#00FF00',
//   '#ADD8E6',
//   '#FFA500',
//   '#663399',
//   '#30D5C8',
//   '#8B0000',
//   '#FFD700',
// }

function App() {
  // const clr = Color();
  const [color, setColor] = useState('');
  const [isFiltersActive, setFiltersActive] = useState(false);

  // const MainContext = useMainContext();

  return (
    <MainContext.Provider
      value={{
        currentColor: color,
        setColor: setColor,
        isFiltersActive: isFiltersActive,
      }}
    >
      <Container>
        <Title />
        <Divider mb={1.75} />
        {/* section can be easily refactored in separate component */}
        <SearchBlock />
        <Divider />
        <ColorPalette />
      </Container>
    </MainContext.Provider>
  );
}

export default App;
