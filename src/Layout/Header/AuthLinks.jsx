import { useState } from 'react';
import RegisterModal from '@/components/RegisterModal/RegisterModal';
import LoginModal from '@/components/LoginModal/LoginModal';
import styles from './Header.module.css';

const AuthLinks = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className={styles.navAuthList}>
      <button className={`${styles.loginBtn} ${styles.navAuthItem}`} onClick={() => setShowLoginModal(true)}>
        Log In
      </button>
      <button className={`${styles.registerBtn} ${styles.navAuthItem}`} onClick={() => setShowRegisterModal(true)}>
        Registration
      </button>

      <RegisterModal open={showRegisterModal} onClose={() => setShowRegisterModal(false)} />
      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
};

export default AuthLinks;
