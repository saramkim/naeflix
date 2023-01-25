import { getAuth, User } from 'firebase/auth';
import { deleteField, doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';

import app from './firebase';

const db = getFirestore(app);
const auth = getAuth();

const setFirestore = ({ user }: { user: User }) => {
  const { uid } = user;
  const watchedRef = doc(db, 'watched', uid);
  setDoc(watchedRef, {});
};

const markMovie = ({ id, rating, comment }: { id: string; rating?: number; comment?: string }) => {
  const { uid } = auth.currentUser!;
  const watchedRef = doc(db, 'watched', uid);
  const data = {
    [id]: {
      rating: rating || 0,
      comment: comment || null,
    },
  };
  updateDoc(watchedRef, data);
};

const unmarkWatched = (id: string) => {
  const { uid } = auth.currentUser!;
  const watchedRef = doc(db, 'watched', uid);
  const data = {
    [id]: deleteField(),
  };
  updateDoc(watchedRef, data);
};

const isMarkedMovie = async (id: string) => {
  const { uid } = auth.currentUser!;
  const watchedRef = doc(db, 'watched', uid);
  const docSnap = await getDoc(watchedRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return id in data;
  }
  return false;
};

const getMarkedMovie = async (id?: string) => {
  const { uid } = auth.currentUser!;
  const watchedRef = doc(db, 'watched', uid);
  const docSnap = await getDoc(watchedRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return id ? data[id] : data;
  }
  return {};
};

export { getMarkedMovie, isMarkedMovie, markMovie, setFirestore, unmarkWatched };
