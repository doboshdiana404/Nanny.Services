import { auth, db } from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { ref, set, get } from 'firebase/database';

export const register = async (email, password, username) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await set(ref(db, 'users/' + user.uid), {
    uid: user.uid,
    email,
    username,
  });
  return user;
};

export const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

export const logout = async () => {
  await signOut(auth);
};

export const getCurrentUser = () => {
  return new Promise(resolve => {
    onAuthStateChanged(auth, async user => {
      if (user) {
        const snapshot = await get(ref(db, 'users/' + user.uid));
        resolve({ uid: user.uid, email: user.email, ...snapshot.val() });
      } else {
        resolve(null);
      }
    });
  });
};
