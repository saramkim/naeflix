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

const uid = () => auth.currentUser!.uid;
const markedRef = (uid: string) => doc(db, 'marked', uid);
const listRef = (uid: string) => doc(db, 'list', uid);

const createUserDoc = ({ user }: { user: User }) => {
  const { uid } = user;
  setDoc(markedRef(uid), {});
  setDoc(listRef(uid), {});
};

const deleteUserDoc = (user: User) => {
  const { uid } = user;
  deleteDoc(markedRef(uid));
  deleteDoc(listRef(uid));
};

const markMovie = (id: string) => updateDoc(markedRef(uid()), { [id]: { rating: 0 } });

const rateMovie = ({ id, rating }: { id: string; rating: number }) =>
  updateDoc(markedRef(uid()), { [`${id}.rating`]: rating });

const commentMovie = ({ id, comment }: { id: string; comment: string }) =>
  updateDoc(markedRef(uid()), { [`${id}.comment`]: comment });

const unmarkMovie = (id: string) => updateDoc(markedRef(uid()), { [id]: deleteField() });

const isMarkedMovie = async (id: string) => {
  const docSnap = await getDoc(markedRef(uid()));
  if (docSnap.exists()) {
    const data = docSnap.data();
    return id in data;
  }
  return false;
};

const getMarkedMovie = async (id?: string) => {
  const docSnap = await getDoc(markedRef(uid()));
  if (docSnap.exists()) {
    const data = docSnap.data();
    return id ? data[id] : data;
  }
  return {};
};

const getHomeList = async () => {
  const docSnap = await getDoc(listRef(uid()));
  if (docSnap.exists()) {
    const { home } = docSnap.data();
    return home;
  }
  return {};
};

const updateHomeList = async (list: string[]) => updateDoc(listRef(uid()), { home: list });

export {
  commentMovie,
  createUserDoc,
  deleteUserDoc,
  getHomeList,
  getMarkedMovie,
  isMarkedMovie,
  markMovie,
  rateMovie,
  unmarkMovie,
  updateHomeList,
};
