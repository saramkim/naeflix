import { getAuth, User } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';

import app from './firebase';

const db = getFirestore(app);
const auth = getAuth();

const setFirestore = ({ user }: { user: User }) => {
  const { uid } = user;
  const watchedRef = doc(db, 'watched', uid);
  setDoc(watchedRef, {});
};

const markWatched = (id: string) => {
  const { uid } = auth.currentUser!;
  const watchedRef = doc(db, 'watched', uid);
  const data = {
    [id]: {
      rating: null,
      comment: null,
    },
  };
  updateDoc(watchedRef, data);
};

const isWatchedMovie = async (id: string) => {
  const { uid } = auth.currentUser!;
  const watchedRef = doc(db, 'watched', uid);
  const docSnap = await getDoc(watchedRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return id in data;
  }
  return false;
};

const getWatchedMovies = async () => {
  const { uid } = auth.currentUser!;
  const watchedRef = doc(db, 'watched', uid);
  const docSnap = await getDoc(watchedRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return data;
  }
  return {};
};

export { getWatchedMovies, isWatchedMovie, markWatched, setFirestore };
