import { auth } from '@/firebase/firebase';
import { signOut } from 'firebase/auth';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
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
    <button onClick={handleLogout} className={`${styles.loginBtn} ${styles.navAuthItem}`}>
      Log out
    </button>
  );
};

export default LogOut;
