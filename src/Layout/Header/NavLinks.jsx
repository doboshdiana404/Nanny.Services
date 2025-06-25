import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const NavLinks = ({ showFavorites }) => (
  <ul className={styles.pageNav}>
    <li>
      <NavLink to="/" className={({ isActive }) => `${styles.pageNavItem} ${isActive ? styles.activeLink : ''}`}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/nannies" className={({ isActive }) => `${styles.pageNavItem} ${isActive ? styles.activeLink : ''}`}>
        Nannies
      </NavLink>
    </li>
    {showFavorites && (
      <li>
        <NavLink to="/favorites" className={({ isActive }) => `${styles.pageNavItem} ${isActive ? styles.activeLink : ''}`}>
          Favorites
        </NavLink>
      </li>
    )}
  </ul>
);

export default NavLinks;
