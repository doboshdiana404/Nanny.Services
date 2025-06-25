import { useContext } from 'react';
import styles from './ThemeSwitcher.module.css';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const themes = [
    { id: 'blue', color: '#007bff' },
    { id: 'green', color: '#38cd3e' },
    { id: 'red', color: '#e74c3c' },
  ];

  return (
    <div className={styles.switcher}>
      {themes.map(t => (
        <button key={t.id} className={`${styles.circle} ${theme === t.id ? styles.active : ''}`} onClick={() => setTheme(t.id)} style={{ backgroundColor: t.color }} title={t.id} />
      ))}
    </div>
  );
};

export default ThemeSwitcher;
