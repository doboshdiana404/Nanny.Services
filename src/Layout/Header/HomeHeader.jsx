import styles from './Header.module.css';
import Logo from './Logo';
import NavLinks from './NavLinks';
import AuthLinks from './AuthLinks';
import LogOut from './LogOut';
import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';

const HomeHeader = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className={`${styles.home}`}>
      <div className={`container ${styles.header}`}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <nav className={styles.nav}>
          <NavLinks />
          <ThemeSwitcher />
          {user ? <LogOut /> : <AuthLinks />}{' '}
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
