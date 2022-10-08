import { getCookie, setCookie, unsetCookie } from "./cookie";
import {
  getLocalStorageItem,
  setLocalStorageItem,
  unsetLocalStoageItem,
} from "./local-storage";

export const setUserLoginInfo = (fireToken: string, next: Function) => {
  if (typeof window === "undefined") {
    return false;
  }
  setCookie("fireToken", fireToken);
  setLocalStorageItem("fireToken", fireToken);
  next();
};
export const getUserLoginInfo = () => {
  if (typeof window === "undefined") {
    return undefined;
  }
  return getCookie("fireToken")
    ? getCookie("fireToken")
    : getLocalStorageItem("fireToken");
};

export const isUserLoggedIn = () => {
  if (typeof window === "undefined") {
    return false;
  }
  return (
    (getCookie("fireToken") ? true : false) &&
    (getLocalStorageItem("fireToken") ? true : false)
  );
};

export const unSetUserLoginInfo = (next: Function) => {
  if (typeof window === "undefined") {
    return false;
  }
  unsetCookie("fireToken");
  unsetLocalStoageItem("fireToken");
  next();
};
