import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';
import styles from './AppointmentModal.module.css';
export default function AppointmentModal({ isOpen, onClose, nanny }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <svg width={32} height={32} className={styles.iconClose}>
            <use href="/sprite.svg#icon-close"></use>
          </svg>
        </button>
        <h2 className={styles.modalAppointmentTitle}>Make an appointment with a babysitter</h2>
        <p className={styles.modalDescription}>
          Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the
          perfect care partner.
        </p>
        <div className={styles.modalNannyInfo}>
          <img src={nanny.avatar_url} alt="" width={44} height={44} className={styles.modalNannyAvatar} />
          <div>
            <p className={styles.modalNannyInscription}>Your nanny</p>
            <h3 className={styles.modalNannyName}>{nanny.name}</h3>
          </div>
        </div>
        <AppointmentForm onSuccess={onClose} nannyId={nanny.id} />
      </div>
    </div>,
    document.body
  );
}
