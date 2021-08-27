import { api } from '../api';

type LoginBody = {
  login: string,
  password: string
};
type LoginResponse = {
  token: string
};
async function login(body: LoginBody) {
  return api.post<LoginResponse, LoginBody>('/login', { login: body.login, password: body.password });
}

type LogoutResponse = {
  // @TODO response de logout generico
};
async function logout() {
  return api.post<LogoutResponse>('/logout');
}

export const auth = {
  login,
  logout,
};
