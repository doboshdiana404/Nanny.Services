import BabysitterCard from '@/components/BabysitterCard/BabysitterCard';
import Filter from '@/components/Filters/Filters';
import LoadMore from '@/components/LoadMore/LoadMore';
import { useFavourites } from '@/context/FavouritesContext';
import { useState, useMemo, useEffect } from 'react';

const FavoritesPage = () => {
  const { favourites } = useFavourites();
  const [filter, setFilter] = useState('name-asc');
  const [visibleCount, setVisibleCount] = useState(3);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    setVisibleCount(3);
  }, [filter]);

  const sorted = useMemo(() => {
    let result = [...favourites];
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
  }, [favourites, filter]);

  const visible = sorted.slice(0, visibleCount);

  return (
    <section style={{ paddingBottom: '100px', paddingTop: '64px', backgroundColor: '#f3f3f3', minHeight: '650px' }}>
      <div className="container">
        <Filter selected={filter} onChange={setFilter} />
        <ul style={{ marginTop: '32px' }}>
          {visible.map(n => (
            <BabysitterCard key={n.id} nanny={n} isExpanded={n.id === expandedId} onExpand={setExpandedId} />
          ))}
        </ul>
        {visibleCount < sorted.length && <LoadMore setVisibleCount={setVisibleCount} />}
      </div>
    </section>
  );
};

export default FavoritesPage;
