import { Navigate, Route, Routes } from 'react-router-dom';
import UsersPage from './UsersPage';
import UsersProfile from './UsersProfile';
import UsersProfileEdit from './UsersProfileEdit';

function UsersRouter() {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />}>
        <Route path=":id" element={<UsersProfile />} />
        <Route path=":id/edit" element={<UsersProfileEdit />} />
        <Route path="/*" element={<Navigate to="." />} />
      </Route>
    </Routes>
  );
}

export default function Users() {
  return (
    <div>
      <h2>Users</h2>
      <UsersRouter />
    </div>
  );
}
