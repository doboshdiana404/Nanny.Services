import { Outlet, useLocation } from 'react-router-dom';
import DefaultHeader from '../Header/DefaultHeader';
import HomeHeader from '../Header/HomeHeader';

const Layout = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';
  return (
    <>
      {isHome ? <HomeHeader /> : <DefaultHeader />}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
