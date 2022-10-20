import { RootState } from '..';
import { IUserDetailsInitialState } from '../interface/private/userDetails';

const userDetailsSelector = (state: RootState): IUserDetailsInitialState => state.userDetailsSlice;

export { userDetailsSelector };
