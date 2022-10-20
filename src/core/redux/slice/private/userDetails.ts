/* eslint @typescript-eslint/explicit-module-boundary-types:0  */
import { createSlice } from '@reduxjs/toolkit';
import { IUserDetailsInitialState } from '../../interface/private/userDetails';
import { getUserDetailsThunk } from '../../thunk/private';

const initialState: IUserDetailsInitialState = {
  isGetUserDetailsLoading: false,
  details: { id: 0, firstName: '', lastName: '', email: '', roles: [] },
};

const userDetailsSlice = createSlice({
  name: 'getUserDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetailsThunk.pending, (state: IUserDetailsInitialState) => {
        state.isGetUserDetailsLoading = true;
      })
      .addCase(getUserDetailsThunk.fulfilled, (state, action) => {
        state.isGetUserDetailsLoading = false;
        state.details = action.payload;
      })
      .addCase(getUserDetailsThunk.rejected, (state) => {
        state.isGetUserDetailsLoading = false;
      });
  },
});

export default userDetailsSlice.reducer;
