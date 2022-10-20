import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiEndPoints } from '../../../../common/constants/apiEndPoints';
import { genericApiCalls } from '../../../../common/utility/apiCall';
import { IUserDetailsResponse } from '../../interface/login/login';

const getUserDetailsThunk = createAsyncThunk('getUserDetails', async (data, { dispatch }) => {
  const res = await genericApiCalls({ url: apiEndPoints.user, method: 'GET', data }, dispatch);
  return res.data as IUserDetailsResponse;
});

export { getUserDetailsThunk };
