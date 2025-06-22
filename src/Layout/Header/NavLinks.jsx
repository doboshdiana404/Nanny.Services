import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
const NavLinks = ({ showFavorites }) => (
  <ul className={styles.pageNav}>
    <li>
      <NavLink to="/" className={styles.pageNavItem}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/nannies" className={styles.pageNavItem}>
        Nannies
      </NavLink>
    </li>
    {showFavorites && (
      <li>
        <NavLink to="/favorites" className={styles.pageNavItem}>
          Favorites
        </NavLink>
      </li>
    )}
  </ul>
);

export default NavLinks;
