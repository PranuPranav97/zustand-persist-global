import cookie from "js-cookie";

export const setCookie = (
  key: string,
  value: string,
  daysOfExpiration?: number
) => {
  cookie.set(key, value, {
    expires: daysOfExpiration || 1,
  });
  return true;
};
export const getCookie = (key: string) => {
  return cookie.get(key);
};

export const unsetCookie = (key: string) => {
  cookie.remove(key, {
    expires: 1,
  });
  return true;
};
