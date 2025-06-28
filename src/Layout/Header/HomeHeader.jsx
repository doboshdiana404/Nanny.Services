import styles from './Header.module.css';
import Logo from './Logo';
import NavLinks from './NavLinks';
import AuthLinks from './AuthLinks';
import LogOut from './LogOut';
import { AuthContext } from '@/context/AuthContext';
import { useContext, useState } from 'react';
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';
import MobileMenu from '@/components/Header/MobileMenu';

const HomeHeader = () => {
  const { user } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${styles.home}`}>
      <div className={`container ${styles.header}`}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>

        <nav className={styles.navtheme}>
          <div className={styles.desktopNav}>
            <NavLinks />

            <ThemeSwitcher />
          </div>
          <div className={styles.desktopNav}>{user ? <LogOut /> : <AuthLinks />}</div>
        </nav>

        <button className={styles.burgerBtn} onClick={() => setMenuOpen(true)}>
          <svg width={28} height={28} style={{ stroke: 'white' }}>
            <use href="/sprite.svg#icon-menu"></use>
          </svg>
        </button>

        <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </header>
  );
};

export default HomeHeader;
