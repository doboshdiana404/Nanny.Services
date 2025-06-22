import styles from './Header.module.css';
import Logo from './Logo';
import NavLinks from './NavLinks';
import AuthLinks from './AuthLinks';

const HomeHeader = () => {
  return (
    <header className={`${styles.home}`}>
      <div className={`container ${styles.header}`}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <nav className={styles.nav}>
          <NavLinks />
          <AuthLinks />
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
