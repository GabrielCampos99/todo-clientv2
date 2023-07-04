import { useState } from 'react';
import useDarkSide from './hooks/useToggleThemeMode';

const App = () => {
  const { colorTheme, setTheme } = useDarkSide();

  const [darkSide, setDarkSide] = useState(colorTheme === 'light');

  const toggleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <div className="w-full flex justify-center">
      <input
        type="checkbox"
        onChange={(e) => toggleDarkMode(e)}
        checked={darkSide}
      />
      <h1 className="text-3xl font-bold underline dark:text-red-900">
        Hello world!
      </h1>
    </div>
  );
};

export default App;
