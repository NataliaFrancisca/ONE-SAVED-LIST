import { auth, db } from '../config';
import { updateDoc, doc } from 'firebase/firestore';
import { getResource } from './resource';
import { type IFormContent } from '@/ts/interface';

export const save = async (data: IFormContent) => {
  const user = auth.currentUser;
  if (user) {
    const userDoc = doc(db, 'users', user.uid);
    const updatedDoc = await updateContent(data);
    return await updateDoc(userDoc, { content: updatedDoc })
      .then(() => {
        return 'Content saved with sucess!';
      })
      .catch((error) => {
        return error;
      });
  }
};

export const updateContent = async (data: IFormContent) => {
  const currentResource = await getResource() as {content: IFormContent[]}
  currentResource.content.unshift(data);
  return currentResource.content;
};
