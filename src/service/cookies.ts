import { type IUserInfo } from '@/ts/interface';
import nookies from 'nookies';

const COOKIE_NAME = 'USER_DATA';

export const setCookie = (data: IUserInfo) => {

  nookies.set(null, COOKIE_NAME, JSON.stringify(data));
  
  console.log("COOKIE SAVED SUCCESS");
};

export const deleteCookie = () => {
  nookies.destroy(null, COOKIE_NAME);
}

export const getCookie = () => {
  const response = nookies.get(null, COOKIE_NAME);

  if(response[COOKIE_NAME]){
    return JSON.parse(response[COOKIE_NAME])
  }
};