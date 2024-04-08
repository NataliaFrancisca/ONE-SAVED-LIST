/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth';
import { auth } from '../config';
import { type IFormLogin } from '@/ts/interface';
const provider = new GoogleAuthProvider();

export async function singInPersistence() {
  try {
    await setPersistence(auth, browserLocalPersistence);
    return 'set persistence sucess';
  } catch (error: any) {
    return {
      message: error.message as string
    };
  }
}

export async function signIn(user: IFormLogin) {
  try {
    const response = await signInWithEmailAndPassword(auth, user.email, user.password);
    await singInPersistence();
    return {
      message: 'login with sucess',
      data: response,
    };
  } catch (error: any) {
    return {
      message: error.message as string
    };
  }
}

export async function signInWithGoogle() {
  try {
    const response = await signInWithPopup(auth, provider);
    await singInPersistence();
    return {
      message: 'login with sucess',
      data: response
    };
  } catch (error: any) {
    return {
      message: error.message as string
    };
  }
}
