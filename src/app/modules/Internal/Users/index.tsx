import { Navigate, Route, Routes } from 'react-router-dom';
import EditUserProfile from './List/Edit/Edit';
import UserProfile from './List/Profile/Profile';
import ListUsers from './List/List';

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
