import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PageNotFound from './pages/PageNotFound';
import Intro from './pages/Intro';
import Login from './pages/Login';
import SingIn from './pages/SingIn';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
const App = () => (
  /*  const { showToast } = useToast();
  const { colorTheme, setTheme } = useDarkSide(); */
  /*  const [darkSide, setDarkSide] = useState(colorTheme === 'light');

  const toggleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setTheme(colorTheme);
    setDarkSide(checked);
  }; */
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />

        <Route path="login" element={<Login />} />
        <Route path="singin" element={<SingIn />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
export default App;
