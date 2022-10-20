import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiEndPoints } from '../../../../common/constants/apiEndPoints';
import { genericApiCalls } from '../../../../common/utility/apiCall';
import { ILoginResponse, ILoginPayload, IGetOrgResponse } from '../../interface/login/login';

const getOrganisationThunk = createAsyncThunk('getOrganisation', async (data, { dispatch }) => {
  const res = await genericApiCalls({ url: apiEndPoints.getOrg, method: 'GET', data }, dispatch);
  return res.data as IGetOrgResponse;
});

const loginThunk = createAsyncThunk('login', async (data: ILoginPayload, { dispatch }) => {
  const res = await genericApiCalls({ url: apiEndPoints.login, method: 'POST', data }, dispatch);
  return res.data as ILoginResponse;
});
const logoutThunk = createAsyncThunk('auth/logout', async function (_payload, thunkAPI) {
  thunkAPI.dispatch({ type: 'logout/LOGOUT' });
});

export { loginThunk, getOrganisationThunk, logoutThunk };
