/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '../config';
import { type IFormRegister } from '@/ts/interface';

const provider = new GoogleAuthProvider();

export async function signUp(user: IFormRegister) {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    const userResponse = response.user;

    await updateProfile(userResponse, {
      displayName: user.name
    });

    return {
      message: 'account created with sucess',
      data: response
    };
  } catch (error: any) {
    return {
      message: error.message as string
    };
  }
}

export async function signUpWithGoogle() {
  try {
    const response = await signInWithPopup(auth, provider);
    return {
      message: 'account created with sucess',
      data: response
    };
  } catch (error: any) {
    return {
      message: error.message as string
    };
  }
}
