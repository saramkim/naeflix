import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { firebaseConfig } from './firebaseConfig';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const createUser = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;

      return true;
    })
    .catch((error) => {
      console.log(error.code);

      if (error.code === 'auth/email-already-in-use') alert('이미 존재하는 계정입니다.');
    });

const loginUser = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;

      return true;
    })
    .catch((error) => {
      console.log(error.code);
      if (error.code === 'auth/wrong-password') alert('비밀번호가 일치하지 않습니다.');
      if (error.code === 'auth/user-not-found') alert('해당 계정은 존재하지 않습니다.');
    });

const checkUserExist = (email: string) =>
  fetchSignInMethodsForEmail(auth, email).then((method) => {
    if (method.length) return true;
    return false;
  });

export { app, checkUserExist, createUser, loginUser };
