import { type UserInfo } from "firebase/auth";
import nookies from 'nookies';

const COOKIE_NAME = 'USER_DATA';

export const setCookie = (data: UserInfo) => {
  const oneDay = 24 * 60 * 60 * 1000
  nookies.set(null, COOKIE_NAME, JSON.stringify(data), {
    maxAge: oneDay * 7
  });
  console.log("COOKIE SAVED SUCCESS");
};

export const deleteCookie = () => {
  nookies.destroy(null, COOKIE_NAME);
}

export const getCookie = () => {
  const cookies = nookies.get(null);

  if(cookies[COOKIE_NAME]){
    return JSON.parse(cookies[COOKIE_NAME]);
  }
};