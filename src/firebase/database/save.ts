import { FormContent } from '@/app/types/types';
import { auth, db } from '../config';
import { updateDoc, doc } from 'firebase/firestore';
import { getResource } from './resource';

export const save = async (data: FormContent) => {
  const user = auth.currentUser;
  if (user) {
    const userDoc = doc(db, 'users', user.uid);
    const updatedDoc = await updateContent(data);
    return updateDoc(userDoc, { content: updatedDoc })
      .then(() => {
        return 'Content saved with sucess!';
      })
      .catch((error) => {
        return error;
      });
  }
};

export const updateContent = async (data: FormContent) => {
  const currentResource = await getResource();
  currentResource.content.unshift(data);
  return currentResource.content;
};
