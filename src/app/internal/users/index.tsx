import { Navigate, Route, Routes } from 'react-router-dom';
import ListUsers from './ListUsers/ListUsers';
import UserProfile from './ListUsers/UserProfile/UserProfile';
import EditUserProfile from './EditUserProfile/EditUsersProfile';

const Routers = () => (
  <Routes>
    <Route path="/" element={<ListUsers />}>
      <Route path=":id" element={<UserProfile />} />
      <Route path=":id/edit" element={<EditUserProfile />} />
      <Route path="/*" element={<Navigate to="." />} />
    </Route>
  </Routes>
);

const Users = () => (
  <div>
    <h2>Users</h2>
    <Routers />
  </div>
);

export default Users;
