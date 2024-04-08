import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config';

export const initializeDB = async () => {
  const user = auth.currentUser;
  await setDoc(doc(db, 'users', `${user?.uid}`), {
    content: []
  });
};
