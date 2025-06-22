import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB3IPlieqz3pMA-gp5mW6VKGf6424poXzA',
  authDomain: 'nanny-services-ebf6e.firebaseapp.com',
  projectId: 'nanny-services-ebf6e',
  storageBucket: 'nanny-services-ebf6e.firebasestorage.app',
  messagingSenderId: '188874546987',
  appId: '1:188874546987:web:c52f8d3e731bc159c7ef6e',
  measurementId: 'G-G158P2KM32',
  databaseURL: 'https://nanny-services-ebf6e-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
