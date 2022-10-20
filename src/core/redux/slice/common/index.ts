/* eslint @typescript-eslint/explicit-module-boundary-types:0  */
import { createSlice } from '@reduxjs/toolkit';
import { ICommonInitialState } from '../../interface/login/login';

const initialState: ICommonInitialState = {
  err: { status: 0, msg: '' },
  success: '',
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    clearToastReducer(state) {
      state.err = { status: 0, msg: '' };
      state.success = '';
    },
    successToastReducer(state, action) {
      state.success = action.payload;
    },
    errToastReducer(state, action) {
      state.err = action.payload;
    },
  },
});

export const { successToastReducer, errToastReducer, clearToastReducer } = commonSlice.actions;

export default commonSlice.reducer;
