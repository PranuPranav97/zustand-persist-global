export const setLocalStorageItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
  return true;
};
export const getLocalStorageItem = (key: string) => {
  let localStorageItem = localStorage.getItem(key);
  if (!localStorageItem) {
    return false;
  }

  return localStorageItem;
};

export const unsetLocalStoageItem = (key: string) => {
  localStorage.removeItem(key);
  return true;
};
