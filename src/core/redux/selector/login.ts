import { RootState } from '..';
import { ILoginInitialState } from '../interface/login/login';

const loginSelector = (state: RootState): ILoginInitialState => state.loginSlice;

export { loginSelector };
