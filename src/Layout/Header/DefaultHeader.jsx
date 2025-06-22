import styles from './Header.module.css';
import Logo from './Logo';
import NavLinks from './NavLinks';
import AuthLinks from './AuthLinks';
import UserMenu from './UserMenu';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const DefaultHeader = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className={`${styles.header} ${styles.default}`}>
      <Logo />
      <NavLinks showFavorites={!!user} />
      {user ? <UserMenu user={user} /> : <AuthLinks />}
    </header>
  );
};

export default DefaultHeader;
