import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Typography from './components/Typography';
import PageNotFound from './pages/PageNotFound';
import Intro from './pages/Intro';

const App = () => (
  /*  const { showToast } = useToast();
  const { colorTheme, setTheme } = useDarkSide(); */
  /*  const [darkSide, setDarkSide] = useState(colorTheme === 'light');

  const toggleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setTheme(colorTheme);
    setDarkSide(checked);
  }; */

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro />} />

      <Route
        path="login"
        element={<Typography variant="h1">login</Typography>}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);
export default App;
