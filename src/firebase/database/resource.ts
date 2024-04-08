import { auth, db } from '../config';
import { getDoc, doc } from 'firebase/firestore';

export const getResource = async () => {
  const user = auth.currentUser;

  if (user) {
    const docRef = doc(db, 'users', user.uid);

    return await getDoc(docRef)
      .then((result) => {
        return result.data();
      })
      .catch((error) => {
        return error;
      });
  }

  return 'user not connect';
};
