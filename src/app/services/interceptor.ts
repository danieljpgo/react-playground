import axios, { AxiosRequestConfig } from 'axios';
import { getLocalStorageData, removeLocalStorageData } from '../../lib/localStorage';
import type { Token } from '../common/types';

export async function request(config: AxiosRequestConfig) {
  const token = getLocalStorageData<Token>('token');

  if (token) {
    return {
      ...config,
      headers: {
        ...config.headers,
        'access-token': token,
      },
    };
  }

  return config;
}

export async function response(error: unknown) {
  if (axios.isAxiosError(error) && error.response && [401, 403].includes(error.response.status)) {
    removeLocalStorageData('headers');
    window.location.reload();
  }

  Promise.reject(error);
}
