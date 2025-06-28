import { createContext, useContext, useEffect, useState } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { db } from '../firebase/firebase';
import { useContext as useReactContext } from 'react';
import { AuthContext } from './AuthContext';

const FavouritesContext = createContext();

export const useFavourites = () => useContext(FavouritesContext);

export const FavouritesProvider = ({ children }) => {
  const { user } = useReactContext(AuthContext);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    if (!user) {
      setFavourites([]);
      return;
    }

    const userFavouritesRef = ref(db, `favourites/${user.uid}`);

    const unsubscribe = onValue(userFavouritesRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        const favArray = Object.values(data);
        setFavourites(favArray);
      } else {
        setFavourites([]);
      }
    });

    return () => unsubscribe();
  }, [user]);

  const toggleFavourite = nanny => {
    if (!user) return;

    const current = [...favourites];
    const index = current.findIndex(n => n.id === nanny.id);
    let newFavourites;

    if (index >= 0) {
      newFavourites = current.filter(n => n.id !== nanny.id);
    } else {
      newFavourites = [...current, nanny];
    }

    const newFavouritesObj = {};
    newFavourites.forEach(nanny => {
      newFavouritesObj[nanny.id] = nanny;
    });

    set(ref(db, `favourites/${user.uid}`), newFavouritesObj);
  };

  return <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>{children}</FavouritesContext.Provider>;
};
