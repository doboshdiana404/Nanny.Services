import { BrowserRouter } from 'react-router-dom';
import AppRoute from './AppRoute';
import { ThemeProvider } from './context/ThemeContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover theme="colored" />
          <AppRoute />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
