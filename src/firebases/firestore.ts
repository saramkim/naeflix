import { getAuth, User } from 'firebase/auth';
import {
  deleteDoc,
  deleteField,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

import app from './firebase';

const db = getFirestore(app);
const auth = getAuth();

const createMarked = ({ user }: { user: User }) => {
  const { uid } = user;
  const markedRef = doc(db, 'marked', uid);
  setDoc(markedRef, {});
};

const deleteMarked = (user: User) => {
  const { uid } = user;
  const markedRef = doc(db, 'marked', uid);
  deleteDoc(markedRef);
};

const markMovie = (id: string) => {
  const { uid } = auth.currentUser!;
  const markedRef = doc(db, 'marked', uid);
  updateDoc(markedRef, { [id]: { rating: 0 } });
};

const rateMovie = ({ id, rating }: { id: string; rating: number }) => {
  const { uid } = auth.currentUser!;
  const markedRef = doc(db, 'marked', uid);
  updateDoc(markedRef, { [`${id}.rating`]: rating });
};

const commentMovie = ({ id, comment }: { id: string; comment: string }) => {
  const { uid } = auth.currentUser!;
  const markedRef = doc(db, 'marked', uid);
  updateDoc(markedRef, { [`${id}.comment`]: comment });
};

const unmarkMovie = (id: string) => {
  const { uid } = auth.currentUser!;
  const markedRef = doc(db, 'marked', uid);
  updateDoc(markedRef, { [id]: deleteField() });
};

const isMarkedMovie = async (id: string) => {
  const { uid } = auth.currentUser!;
  const markedRef = doc(db, 'marked', uid);
  const docSnap = await getDoc(markedRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return id in data;
  }
  return false;
};

const getMarkedMovie = async (id?: string) => {
  const { uid } = auth.currentUser!;
  const markedRef = doc(db, 'marked', uid);
  const docSnap = await getDoc(markedRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return id ? data[id] : data;
  }
  return {};
};

export {
  commentMovie,
  createMarked,
  deleteMarked,
  getMarkedMovie,
  isMarkedMovie,
  markMovie,
  rateMovie,
  unmarkMovie,
};
