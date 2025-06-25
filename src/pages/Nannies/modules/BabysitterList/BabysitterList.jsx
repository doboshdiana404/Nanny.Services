import { useBabysitters } from '@/hooks/useBabysitters';
import BabysitterCard from '../../components/BabysitterCard/BabysitterCard';
import { useEffect, useMemo, useState } from 'react';
import styles from './BabysitterList.module.css';
import Filter from '../../components/Filters/Filters';

const BabysitterList = () => {
  const { babysitters, loading } = useBabysitters();
  const [filter, setFilter] = useState('name-asc');
  const [visibleCount, setVisibleCount] = useState(3);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    setVisibleCount(3);
  }, [filter]);

  const sortedAndFiltered = useMemo(() => {
    let result = [...babysitters];

    switch (filter) {
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-low':
        result = result.filter(n => n.price_per_hour < 10);
        break;
      case 'price-high':
        result = result.filter(n => n.price_per_hour >= 10);
        break;
      case 'rating-high':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'rating-low':
        result.sort((a, b) => a.rating - b.rating);
        break;
      case 'all':
      default:
        break;
    }

    return result;
  }, [babysitters, filter]);

  const visibleBabysitters = sortedAndFiltered.slice(0, visibleCount);
  const handleExpand = id => setExpandedId(id);

  return (
    <>
      <Filter selected={filter} onChange={setFilter} />

      {loading && <p>Loading...</p>}

      {!loading && sortedAndFiltered.length === 0 && <p className={styles.noResults}>Nothing found on your filter</p>}

      <ul style={{ marginTop: '32px' }}>
        {!loading && visibleBabysitters.map(nanny => <BabysitterCard key={nanny.id} nanny={nanny} isExpanded={nanny.id === expandedId} onExpand={handleExpand} />)}
      </ul>

      {visibleCount < sortedAndFiltered.length && (
        <div className={styles.loadMoreBtnWrap}>
          <button onClick={() => setVisibleCount(prev => prev + 3)} className={styles.loadMoreBtn}>
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default BabysitterList;
