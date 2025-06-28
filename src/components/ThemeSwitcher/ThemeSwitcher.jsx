import { useContext, useState, useEffect, useRef } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import styles from './ThemeSwitcher.module.css';

const themes = [
  { id: 'blue', label: '', icon: '🔵' },
  { id: 'green', label: '', icon: '🟢' },
  { id: 'red', label: '', icon: '🔴' },
];

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentTheme = themes.find(t => t.id === theme);

  const toggleDropdown = () => setOpen(prev => !prev);
  const selectTheme = id => {
    setTheme(id);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button className={styles.trigger} onClick={toggleDropdown}>
        {currentTheme.icon} {currentTheme.label}
        <svg width={16} height={16} className={styles.chevron}>
          <use href="/sprite.svg#icon-chevron-down" />
        </svg>
      </button>

      {open && (
        <ul className={styles.menu}>
          {themes.map(t => (
            <li key={t.id} className={`${styles.option} ${theme === t.id ? styles.active : ''}`} onClick={() => selectTheme(t.id)}>
              <span className={styles.icon}>{t.icon}</span>
              <span>{t.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThemeSwitcher;
