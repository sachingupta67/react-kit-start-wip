import { RootState } from '..';
import { ICommonInitialState } from '../interface/login/login';

const commonSelector = (state: RootState): ICommonInitialState => state.commonSlice;

export { commonSelector };
