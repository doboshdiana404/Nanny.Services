import { useRef, useState, useEffect } from 'react';
import TimePickerWheel from './TimePickerWheel';
import styles from './TimePickerDropdown.module.css';

export default function TimePickerDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const handleClickOutside = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.inputWrapper} onClick={() => setOpen(!open)}>
        <input className={styles.input} value={value || ''} readOnly placeholder="00:00" />
        <svg width={20} height={20} className={styles.icon}>
          <use href="/sprite.svg#icon-clock"></use>
        </svg>
      </div>

      {open && <TimePickerWheel value={value} onChange={onChange} />}
    </div>
  );
}
