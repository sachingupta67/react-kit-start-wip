/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint @typescript-eslint/explicit-module-boundary-types:0  */
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { env } from '../../common/constants/env';
import { rootReducer } from './rootReducer';

export const createStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.REACT_APP_ENV !== env.prod, // DEVTOOLS WILL BE DISBLED IN PROD 😁
  });
};

const store = createStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
