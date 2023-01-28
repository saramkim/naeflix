import {
  createUserWithEmailAndPassword,
  deleteUser,
  fetchSignInMethodsForEmail,
  getAuth,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth';

import { createMarked, deleteMarked } from './firestore';

const auth = getAuth();

const createUser = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then(createMarked)
    .catch((error) => {
      console.log(error.code);

      if (error.code === 'auth/email-already-in-use') alert('이미 존재하는 계정입니다.');
    });

const unregisterUser = (user: User) => {
  deleteMarked(user);
  return deleteUser(user).catch((error) => console.log(error.code));
};

const loginUser = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password).catch((error) => {
    console.log(error.code);

    if (error.code === 'auth/wrong-password') alert('비밀번호가 일치하지 않습니다.');
    if (error.code === 'auth/user-not-found') alert('해당 계정은 존재하지 않습니다.');
  });

const checkUserExist = (email: string) =>
  fetchSignInMethodsForEmail(auth, email).then((method) => method.length !== 0);

export { checkUserExist, createUser, loginUser, unregisterUser };
