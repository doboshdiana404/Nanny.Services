import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
const AuthLinks = () => (
  <div className={styles.navAuthList}>
    <NavLink to="/login" className={`${styles.loginBtn} ${styles.navAuthItem}`}>
      Log In
    </NavLink>
    <NavLink to="/register" className={`${styles.registerBtn} ${styles.navAuthItem}`}>
      Registration
    </NavLink>
  </div>
);

export default AuthLinks;
