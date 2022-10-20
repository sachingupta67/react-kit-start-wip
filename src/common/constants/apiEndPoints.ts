const publicApi = {
  login: '/credentials/login',
  getOrg: '/users/organizations',
};
const privateApi = { user: '/users' };

const baseURL = 'http://localhost:8080/api';
const apiEndPoints = {
  FAKE_API: '/users',
  ...publicApi,
  ...privateApi,
};

export { apiEndPoints, baseURL };
