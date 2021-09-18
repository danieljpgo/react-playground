import {
  Navigate,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import RegisterAdminPage from './RegisterAdminPage';
import RegisterUserPage from './RegisterUserPage';

function RegisterRouter() {
  return (
    <Routes>
      <Route path="user" element={<RegisterUserPage />} />
      <Route path="admin" element={<RegisterAdminPage />} />
      <Route path="/" element={<Navigate to="user" />} />
      <Route path="/*" element={<Navigate to="user" />} />
    </Routes>
  );
}

export default function Register() {
  return (
    <div>
      <h2>Register Module</h2>
      <ul>
        <li><Link to="..">Back</Link></li>
        <li><Link to="admin">Admin Page</Link></li>
        <li><Link to="user">User Page</Link></li>
      </ul>
      <RegisterRouter />
    </div>
  );
}
