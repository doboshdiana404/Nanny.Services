import styles from './Header.module.css';
import Logo from './Logo';
import NavLinks from './NavLinks';
import AuthLinks from './AuthLinks';
import UserMenu from './UserMenu';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';

const DefaultHeader = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className={`${styles.header} ${styles.default}`}>
      <button onClick={() => navigate('/')}>
        <Logo />
      </button>
      <NavLinks showFavorites={!!user} />
      <ThemeSwitcher />
      {user ? <UserMenu user={user} /> : <AuthLinks />}
    </header>
  );
};

export default DefaultHeader;
