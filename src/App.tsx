import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Typography from './components/Typography';
import PageNotFound from './pages/PageNotFound';

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
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Typography variant="h1">HOME</Typography>} />

      <Route
        path="login"
        element={<Typography variant="h1">login</Typography>}
      />
    </Routes>
  </BrowserRouter>
);
export default App;
