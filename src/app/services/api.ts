import axios from 'axios';
import { env } from '../common/utils';
import { request, response } from './interceptor';

const instance = axios.create({
  baseURL: env.apiBaseUrl,
});

async function get<Data>(endpoint: string): Promise<Data> {
  const { data } = await instance.get(endpoint);
  return data;
}

async function post<Data, Body>(endpoint: string, body: Body): Promise<Data> {
  const { data } = await instance.post<Data>(endpoint, body);
  return data;
}

async function put<Data, Body>(endpoint: string, body: Body): Promise<Data> {
  const { data } = await instance.put<Data>(endpoint, body);
  return data;
}

async function del<Data>(endpoint: string): Promise<Data> {
  const { data } = await instance.delete<Data>(endpoint);
  return data;
}

export const api = {
  get,
  post,
  put,
  del,
};

instance.interceptors.request.use(request);
instance.interceptors.response.use((res) => res, response);
