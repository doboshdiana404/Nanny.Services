import { useEffect, useState } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '../firebase/firebase';

export const useBabysitters = () => {
  const [babysitters, setBabysitters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBabysitters = async () => {
      try {
        const snapshot = await get(ref(db, 'babysitters'));
        if (snapshot.exists()) {
          const data = snapshot.val();
          const babysittersArray = Object.entries(data).map(([id, value]) => ({
            id,
            ...value,
          }));
          setBabysitters(babysittersArray);
        }
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBabysitters();
  }, []);

  return { babysitters, loading };
};
