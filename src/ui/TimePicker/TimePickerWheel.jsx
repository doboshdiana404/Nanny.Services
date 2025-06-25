import { useEffect, useRef, useState } from 'react';
import styles from './TimePickerDropdown.module.css';
import { hourOptions, minuteOptions } from '@/utils/timeOptions';

export default function TimePickerWheel({ value, onChange }) {
  const initialHour = value?.split(':')[0] || '09';
  const initialMinute = value?.split(':')[1] || '00';

  const [hour, setHour] = useState(initialHour);
  const [minute, setMinute] = useState(initialMinute);

  const hourRef = useRef(null);
  const minuteRef = useRef(null);

  const scrollTo = (ref, options, val) => {
    const index = options.indexOf(val);
    if (index !== -1 && ref.current) {
      ref.current.scrollTo({
        top: index * 40,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollTo(hourRef, hourOptions, hour);
    scrollTo(minuteRef, minuteOptions, minute);
  }, []);

  useEffect(() => {
    onChange(`${hour}:${minute}`);
  }, [hour, minute]);

  const handleScroll = (ref, setFunc, options) => {
    if (!ref.current) return;
    clearTimeout(ref.current._scrollTimeout);
    ref.current._scrollTimeout = setTimeout(() => {
      const index = Math.round(ref.current.scrollTop / 40);
      const val = options[index];
      if (val) setFunc(val);
    }, 80);
  };

  const handleClick = (val, type) => {
    if (type === 'hour') {
      setHour(val);
      scrollTo(hourRef, hourOptions, val);
    } else {
      setMinute(val);
      scrollTo(minuteRef, minuteOptions, val);
    }
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownTitle}>Meeting time</div>
      <div className={styles.pickerRow}>
        <div className={styles.scrollColumn} ref={hourRef} onScroll={() => handleScroll(hourRef, setHour, hourOptions)}>
          {hourOptions.map(h => (
            <div key={h} onClick={() => handleClick(h, 'hour')} className={`${styles.timeItem} ${h === hour ? styles.active : ''}`}>
              {h}
            </div>
          ))}
        </div>

        <span>:</span>

        <div className={styles.scrollColumn} ref={minuteRef} onScroll={() => handleScroll(minuteRef, setMinute, minuteOptions)}>
          {minuteOptions.map(m => (
            <div key={m} onClick={() => handleClick(m, 'minute')} className={`${styles.timeItem} ${m === minute ? styles.active : ''}`}>
              {m}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
