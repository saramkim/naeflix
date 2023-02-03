import { getAuth } from 'firebase/auth';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

import app from './firebase';

const storage = getStorage(app);
const auth = getAuth();

const uploadImage = async (file: File) => {
  const { uid, photoURL } = auth.currentUser!;
  const imageRef = ref(storage, `${uid}/${file.name + file.lastModified}`);

  if (photoURL) await deleteImage(photoURL);
  await uploadBytes(imageRef, file).catch((error) => console.log(error.code));

  return getDownloadURL(imageRef);
};

const deleteImage = (photoURL: string) => {
  const userImageRef = ref(storage, photoURL);
  return deleteObject(userImageRef);
};

export { deleteImage, uploadImage };
