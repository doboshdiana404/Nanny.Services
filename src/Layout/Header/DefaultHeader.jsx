import styles from './Header.module.css';
import Logo from './Logo';
import NavLinks from './NavLinks';
import AuthLinks from './AuthLinks';
import UserMenu from './UserMenu';
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';

import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import MobileMenu from '@/components/Header/MobileMenu';

const DefaultHeader = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${styles.default}`}>
      <div className={`container ${styles.header}`}>
        <button onClick={() => navigate('/')} className={styles.logoBtn}>
          <Logo />
        </button>

        <div className={styles.desktopNav}>
          <NavLinks showFavorites={!!user} />
        </div>
        <div className={styles.desktopNav}>{user ? <UserMenu user={user} className={styles.desktopNav} /> : <AuthLinks className={styles.desktopNav} />}</div>

        <div className={styles.themeSwitch}>
          <ThemeSwitcher />
        </div>

        <button className={styles.burgerBtn} onClick={() => setMenuOpen(true)}>
          <svg width={32} height={32} style={{ stroke: 'white' }}>
            <use href="/sprite.svg#icon-menu"></use>
          </svg>
        </button>

        <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </header>
  );
};

export default DefaultHeader;
