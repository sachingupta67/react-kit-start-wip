/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { combineReducers } from '@reduxjs/toolkit';
import loginSlice from './slice/login/index';
import commonSlice from './slice/common';
import userDetailsSlice from './slice/private/userDetails';

const allReducers = combineReducers({ loginSlice, commonSlice, userDetailsSlice });

export const rootReducer = (state: any, action: any) => {
  if (action.type === 'logout/LOGOUT') {
    return allReducers(undefined, action);
  }
  return allReducers(state, action);
};
