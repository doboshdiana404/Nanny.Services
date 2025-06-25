import { BrowserRouter } from 'react-router-dom';
import AppRoute from './AppRoute';
import { ThemeProvider } from './context/ThemeContext';
// import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
