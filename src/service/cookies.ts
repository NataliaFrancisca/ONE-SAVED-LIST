import { type IUserInfo } from '@/ts/interface';
import nookies from 'nookies';

const COOKIE_NAME = 'USER_DATA';

export const setCookie = (data: IUserInfo) => {
  const oneDay = 24 * 60 * 60 * 1000

  const { email, displayName, photoURL } = data;

  nookies.set(null, COOKIE_NAME, JSON.stringify({email, displayName, photoURL}), {
    maxAge: oneDay * 7
  });
  
  console.log("COOKIE SAVED SUCCESS");
};

export const deleteCookie = () => {
  nookies.destroy(null, COOKIE_NAME);
}

export const getCookie = async() => {
  const { cookies } = await import('next/headers')
  const cookieManager = cookies()
  const response = cookieManager.get('USER_DATA');

  if(response?.value){
    return JSON.parse(response.value)
  }
};