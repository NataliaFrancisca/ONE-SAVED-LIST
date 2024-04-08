/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateProfile } from 'firebase/auth';
import { auth } from '../config';

export async function updateUserName(userName: string) {
  const credential = await userCredential();

  if (credential) {
    try {
      await updateProfile(credential, { displayName: userName });
      return {
        message: 'username updated with sucess',
        data: credential
      };
    } catch (error: any) {
      return {
        message: error.message
      };
    }
  } else {
    return {
      message: 'problem with auth'
    };
  }
}

export async function updateUserPhoto(photo: string) {
  const credential = await userCredential();

  if (credential) {
    try {
      await updateProfile(credential, { photoURL: photo });
      return {
        message: 'photo updated with sucess',
        data: credential
      };
    } catch (error: any) {
      return {
        message: error.message
      };
    }
  } else {
    return {
      message: 'problem with auth'
    };
  }
}

const userCredential = async () => {
  const user = auth.currentUser;
  return user;
};
