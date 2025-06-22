import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout/Layout';
import Home from './pages/Home/Home';
import Nannies from './pages/Nannies/Nannies';

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/nannies" element={<Nannies />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
