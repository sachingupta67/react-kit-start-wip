import localStorageConstants from '../constants/localStorageConstants';
import { jwtDecoder } from './handlers';
import { getDataFromLocalStorage } from './localStorageHandlers';

interface ILoginChecker {
  isLoggedIn: boolean;
  slcOrg: { id: number; name: string };
  userDetails: { fName: string; lName: string };
  token: string;
}

export const loginChecker = (): ILoginChecker => {
  let data = {
    isLoggedIn: false,
    slcOrg: { id: 0, name: '' },
    userDetails: { fName: '', lName: '' },
    token: '',
  };
  const accessToken = (getDataFromLocalStorage(localStorageConstants.LOGIN) || '') as string;
  const slcOrg = getDataFromLocalStorage(localStorageConstants.slcOrg) as any;
  const { firstName = '', lastName = '' } = jwtDecoder(accessToken);
  if (accessToken !== null) {
    data = {
      ...data,
      isLoggedIn: true,
      userDetails: { fName: firstName, lName: lastName },
      token: accessToken,
    };
  }
  if (slcOrg !== null) {
    data = { ...data, slcOrg };
  }
  return data;
};
