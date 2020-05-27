export const getStorage = (key) => {
  return window.localStorage.getItem(key);
};

export const setStorage = (key,value) => {
  window.localStorage.setItem(key, value);
};

export const removeStorage = (key) => {
  window.localStorage.removeItem(key);
};

export default { getStorage, setStorage, removeStorage };
