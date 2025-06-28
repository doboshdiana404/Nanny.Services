import { NavLink, useNavigate } from 'react-router-dom';
import styles from './MobileMenu.module.css';
import { useContext, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import RegisterModal from '../RegisterModal/RegisterModal';
import LoginModal from '../LoginModal/LoginModal';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebase';

const MobileMenu = ({ isOpen, onClose }) => {
  const { user } = useContext(AuthContext);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/nannies');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  return (
    <div className={`${styles.mobileMenuBackdrop} ${isOpen ? styles.open : ''}`} onClick={onClose}>
      <div className={styles.mobileMenu} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <svg width={28} height={28} style={{ stroke: 'black' }}>
            <use href="/sprite.svg#icon-close"></use>
          </svg>
        </button>

        <nav className={styles.mobileNav}>
          <NavLink to="/" className={styles.mobileLink} onClick={onClose}>
            Home
          </NavLink>
          <NavLink to="/nannies" className={styles.mobileLink} onClick={onClose}>
            Nannies
          </NavLink>
          {user && (
            <NavLink to="/favorites" className={styles.mobileLink} onClick={onClose}>
              Favorites
            </NavLink>
          )}
          {user ? (
            <button onClick={handleLogout} className={styles.mobileLink}>
              Log out
            </button>
          ) : (
            <div className={styles.mobileAuth}>
              <button className={styles.mobileLink} onClick={() => setShowLoginModal(true)}>
                Log In
              </button>
              <button className={styles.mobileLink} onClick={() => setShowRegisterModal(true)}>
                Registration
              </button>

              <RegisterModal open={showRegisterModal} onClose={() => setShowRegisterModal(false)} />
              <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
