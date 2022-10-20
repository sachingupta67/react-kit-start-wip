const saveDataToLocalStorage = (key = '', value: string | Boolean | Object): void => {
  if (key !== null) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const getDataFromLocalStorage = (key = ''): String => {
  let value = '';
  if (key !== null) {
    value = JSON.parse(localStorage.getItem(key) as string);
  }
  return value;
};

const removeDataFromLocalStorage = (key = ''): void => {
  if (key !== null) {
    localStorage.removeItem(key);
  }
};

const clearLocalStorage = (): void => localStorage.clear();

export {
  saveDataToLocalStorage,
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
  clearLocalStorage,
};
