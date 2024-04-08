import { signOut } from 'firebase/auth';
import { auth } from '../config';
import { deleteCookie } from '@/service/cookies';

export async function signOutUser() {
  try {
    await signOut(auth);
    deleteCookie();
    return {
      message: 'singout with sucess',
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      message: error.message
    };
  }
}
