import { useState } from 'react';
import styles from './Filter.module.css';

const options = [
  { label: 'A to Z', value: 'name-asc' },
  { label: 'Z to A', value: 'name-desc' },
  { label: 'Less than 10$', value: 'price-low' },
  { label: 'Greater than 10$', value: 'price-high' },
  { label: 'Popular', value: 'rating-high' },
  { label: 'Not popular', value: 'rating-low' },
  { label: 'Show all', value: 'all' },
];

const Filter = ({ selected, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = value => {
    onChange(value);
    setOpen(false);
  };

  const selectedLabel = options.find(opt => opt.value === selected)?.label || 'Filters';

  return (
    <div className={styles.wrapper}>
      <label className={styles.labelFilter}>Filters</label>
      <button onClick={() => setOpen(!open)} className={styles.selectButton}>
        {selectedLabel}
        <span className={styles.arrow}>
          <svg width={20} height={20} className={styles.chevronDownIcon}>
            <use href="/sprite.svg#icon-chevron-down"></use>
          </svg>
        </span>
      </button>
      {open && (
        <ul className={styles.optionsList}>
          {options.map(opt => (
            <li key={opt.value} className={`${styles.option} ${selected === opt.value ? styles.activeOption : ''}`} onClick={() => handleSelect(opt.value)}>
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
