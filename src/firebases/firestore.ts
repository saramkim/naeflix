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

const markMovie = (id: string) => {
  const { uid } = auth.currentUser!;
  const watchedRef = doc(db, 'watched', uid);
  updateDoc(watchedRef, { [id]: { rating: 0 } });
};

const rateMovie = ({ id, rating }: { id: string; rating: number }) => {
  const { uid } = auth.currentUser!;
  const watchedRef = doc(db, 'watched', uid);
  updateDoc(watchedRef, { [`${id}.rating`]: rating });
};

const commentMovie = ({ id, comment }: { id: string; comment: string }) => {
  const { uid } = auth.currentUser!;
  const watchedRef = doc(db, 'watched', uid);
  updateDoc(watchedRef, { [`${id}.comment`]: comment });
};

const unmarkWatched = (id: string) => {
  const { uid } = auth.currentUser!;
  const watchedRef = doc(db, 'watched', uid);
  updateDoc(watchedRef, { [id]: deleteField() });
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

export {
  commentMovie,
  getMarkedMovie,
  isMarkedMovie,
  markMovie,
  rateMovie,
  setFirestore,
  unmarkWatched,
};
