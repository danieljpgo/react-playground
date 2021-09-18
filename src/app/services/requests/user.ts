import { api } from '../api';

type GetUserResponse = {
  id: string,
  name: string,
  email: string,
};
async function getUser(id: string) {
  return api.get<GetUserResponse>(`/user/${id}`);
}

type ListUsersParams = {
  limit: number,
  page: number,
};
type ListUsersResponse = {
  id: string,
  name: string,
  email: string,
};
async function listUsers(params: ListUsersParams) {
  const searchParams = new URLSearchParams({
    limit: String(params.limit),
    page: String(params.page),
  });
  return api.get<ListUsersResponse>(`/users?${searchParams.toString()}`);
}

type EditUserBody = {
  name: string,
  email: string,
};
type EditUserResponse = {
  id: string,
  name: string,
  email: string,
};
async function editUser(id:string, body: EditUserBody) {
  return api.put<EditUserResponse, EditUserBody>(`/user/${id}`, body);
}

export const user = {
  get: getUser,
  list: listUsers,
  edit: editUser,
};
