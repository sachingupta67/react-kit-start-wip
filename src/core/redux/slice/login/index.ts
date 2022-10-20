/* eslint @typescript-eslint/explicit-module-boundary-types:0  */
import { createSlice } from '@reduxjs/toolkit';
import localStorageConstants from '../../../../common/constants/localStorageConstants';
import { jwtDecoder } from '../../../../common/utility/handlers';
import { saveDataToLocalStorage } from '../../../../common/utility/localStorageHandlers';
import { ILoginInitialState } from '../../interface/login/login';
import { getOrganisationThunk, loginThunk } from '../../thunk/login';

const initialState: ILoginInitialState = {
  isLoggedIn: false,
  email: '',
  password: '',
  id: '',
  isLoading: false,
  isShowSelectOrg: false,
  accessToken: '',
  selectedOrg: { id: 0, name: '' },
  orgList: [],
  isOrgLoading: false,
  details: { id: 0, firstName: '', lastName: '', email: '' },
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    selectOrgPopUpReducer(state, action) {
      state.isShowSelectOrg = action.payload;
    },
    selectOrgReducer(state, action) {
      state.selectedOrg = action.payload;
      saveDataToLocalStorage(localStorageConstants.slcOrg, action.payload);
      state.isShowSelectOrg = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state: ILoginInitialState) => {
        state.isLoggedIn = true;
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        /* ****ACCESS TOKEN HANLDIN ******* */
        if (action.payload?.accessToken) {
          state.isLoggedIn = true;
          state.isShowSelectOrg = true;
          state.accessToken = action.payload.accessToken;
          saveDataToLocalStorage(localStorageConstants.LOGIN, action.payload.accessToken); // Need to save into Local Storage
          const { firstName, lastName } = jwtDecoder(action.payload.accessToken);

          state.details.firstName = firstName;
          state.details.lastName = lastName;
        }
        /* ****ACCESS TOKEN HANLDIN  END******* */
      })
      .addCase(loginThunk.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(getOrganisationThunk.pending, (state: ILoginInitialState) => {
        state.isOrgLoading = true;
      })
      .addCase(getOrganisationThunk.fulfilled, (state, action) => {
        state.isOrgLoading = false;
        state.orgList = action.payload;
      })
      .addCase(getOrganisationThunk.rejected, (state) => {
        state.isOrgLoading = false;
      });
  },
});

export const { selectOrgPopUpReducer, selectOrgReducer } = loginSlice.actions;
export default loginSlice.reducer;
