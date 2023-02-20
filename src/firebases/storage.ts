/* eslint-disable @typescript-eslint/no-var-requires */
import { getAuth } from 'firebase/auth';
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from 'firebase/storage';

import { app } from './firebase';

const storage = getStorage(app);
const auth = getAuth();

const uploadImage = async (file: File) => {
  const { uid } = auth.currentUser!;
  const imageRef = ref(storage, `${uid}/${file.name + file.lastModified}`);
  await uploadBytes(imageRef, file).catch((error) => console.log(error.code));
  return getDownloadURL(imageRef);
};

const deleteImageFolder = async (uid: string) => {
  const BASE_URL = `gs://${storage.app.options.storageBucket}`;
  const storageRef = ref(storage, `${BASE_URL}/${uid}`);
  listAll(storageRef)
    .then((res) => {
      res.items.forEach((fileRef) => {
        const path = `${BASE_URL}/${uid}/${fileRef.name}`;
        const userImageRef = ref(storage, path);
        return deleteObject(userImageRef);
      });
    })
    .catch((error) => console.log(error.code));
};
export { deleteImageFolder, uploadImage };
