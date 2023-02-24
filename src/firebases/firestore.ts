import { getAuth, User } from 'firebase/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  deleteField,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

import { app } from './firebase';

interface MarkBestMovieProps {
  id: string;
  title: string;
  comment: string;
  posterPath: string | null;
}

export interface MarkBestMovieType extends MarkBestMovieProps {
  user: { uid: string; displayName: string; photoURL: string };
  timestamp: number;
  docId: string;
}

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

const getComment = async (id: string) => {
  const data = await getMarkedMovie(id);
  return data ? data.comment : '';
};

const getStar = async (id: string) => {
  const data = await getMarkedMovie(id);
  return data ? data.rating : 0;
};

const getHomeList = async () => {
  const docSnap = await getDoc(listRef(uid()));
  if (docSnap.exists()) {
    const data: { [key: string]: string[] } = docSnap.data();
    const { home } = data;
    return home;
  }
  return [];
};

const updateHomeList = async (list: string[]) => updateDoc(listRef(uid()), { home: list });

const markBestMovie = async ({ id, title, comment, posterPath }: MarkBestMovieProps) => {
  const { uid, displayName, photoURL } = auth.currentUser!;
  updateDoc(markedRef(uid), { [`${id}.best`]: true });
  return addDoc(collection(db, 'best'), {
    id,
    title,
    posterPath,
    comment,
    user: { uid, displayName, photoURL },
    timestamp: Date.now(),
  });
};

const getBestMovieList = async () => {
  const bestMovieList: MarkBestMovieType[] = [];
  const bestQuery = query(collection(db, 'best'), orderBy('timestamp', 'desc'));
  const querySnapshot = await getDocs(bestQuery);
  querySnapshot.forEach((doc) => {
    const data = doc.data() as MarkBestMovieType;
    bestMovieList.push({ ...data, docId: doc.id });
  });
  return bestMovieList;
};

const deleteBestMovie = async ({ uid, id, docId }: { uid: string; id: string; docId: string }) => {
  updateDoc(markedRef(uid), { [`${id}.best`]: false });
  return deleteDoc(doc(db, 'best', docId));
};

export {
  commentMovie,
  createUserDoc,
  deleteBestMovie,
  deleteUserDoc,
  getBestMovieList,
  getComment,
  getHomeList,
  getMarkedMovie,
  getStar,
  isMarkedMovie,
  markBestMovie,
  markMovie,
  rateMovie,
  unmarkMovie,
  updateHomeList,
};
