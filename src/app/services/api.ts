import axios from 'axios';
import { env } from '../common/constants';
import { request, response } from './interceptor';

const instance = axios.create({
  baseURL: env.apiBaseUrl,
});

async function get<Data>(endpoint: string): Promise<Data> {
  const { data } = await instance.get(endpoint);
  return data;
}

async function post<Response, Body = unknown>(endpoint: string, body?: Body): Promise<Response> {
  const { data } = await instance.post<Response>(endpoint, body);
  return data;
}

async function put<Response, Body = unknown>(endpoint: string, body: Body): Promise<Response> {
  const { data } = await instance.put<Response>(endpoint, body);
  return data;
}

async function del<Response>(endpoint: string): Promise<Response> {
  const { data } = await instance.delete<Response>(endpoint);
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
