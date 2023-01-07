import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

import { app } from './firebase';

const storage = getStorage(app);

const uploadImage = async (file: File) => {
  const imageRef = ref(storage, `images/${file.name}`);
  await uploadBytes(imageRef, file);
  return getDownloadURL(imageRef);
};

export { uploadImage };
