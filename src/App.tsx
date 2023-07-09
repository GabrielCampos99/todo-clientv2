import { useState } from 'react';
import useDarkSide from './hooks/useToggleThemeMode';
import Carrousel from './components/Carrousel';

const App = () => {
  const { colorTheme, setTheme } = useDarkSide();

  const [darkSide, setDarkSide] = useState(colorTheme === 'light');

  const toggleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <div className="w-full flex flex-col">
      <div className="items-center mx-auto">
        <input
          type="checkbox"
          onChange={(e) => toggleDarkMode(e)}
          checked={darkSide}
        />
        <h1 className="text-3xl font-bold underline dark:text-red-900">
          Hello world!
        </h1>

        <div />
      </div>
    </div>
  );
};

export default App;
