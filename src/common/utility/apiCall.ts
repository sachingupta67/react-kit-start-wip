/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios';
import type { AxiosRequestConfig, AxiosError } from 'axios';
import { baseURL } from '../constants/apiEndPoints';
import { errToastReducer, successToastReducer } from '../../core/redux/slice/common';
import _ from 'lodash';
import { getDataFromLocalStorage } from './localStorageHandlers';
import localStorageConstants from '../constants/localStorageConstants';

interface IAPIParams {
  url: string;
  method: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
  headers?: AxiosRequestConfig['headers'];
  isShowSuccessMsg?: boolean;
}

const genericApiCalls = async (
  { url, method = 'GET', data, params, headers, isShowSuccessMsg }: IAPIParams,
  dispatch: Function
) => {
  const loginToken = getDataFromLocalStorage(localStorageConstants.LOGIN) as string;
  if (loginToken !== null) {
    headers = { Authorization: `Bearer ${loginToken}` }; // TODO : Token Added into header
  }
  try {
    const result = await axios({ url, baseURL, method, data, params, headers });
    if (isShowSuccessMsg) {
      dispatch(successToastReducer('data saved successfully'));
    }
    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError as AxiosError;
    // const errStatus = err.response?.status;
    const errData = err.response?.data as {
      httpStatus: number;
      message: string;
    };

    let errPayload = {};

    if (_.isEmpty(errData)) {
      errPayload = { status: 0, msg: 'Something went wrong !!!' };
    } else {
      errPayload = {
        status: errData.httpStatus,
        msg: errData.message,
      };
    }

    dispatch(errToastReducer(errPayload));
    return {
      error: errPayload,
    };
  }
};

export { genericApiCalls };
