import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout/Layout';
import Home from './pages/Home/Home';
import Nannies from './pages/Nannies/Nannies';
import Favorites from './pages/Favorites/Favorites';

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/nannies" element={<Nannies />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
