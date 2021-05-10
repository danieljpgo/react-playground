import {
  Navigate,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import RegisterAdmin from './Admin/Admin';
import RegisterUser from './User/User';

const Routers = () => (
  <Routes>
    <Route key="user" path="user" element={<RegisterUser />} />
    <Route key="admin" path="admin" element={<RegisterAdmin />} />
    <Route key="default" path="/" element={<Navigate to="user" />} />
    <Route key="not-found" path="/*" element={<Navigate to="user" />} />
  </Routes>
);

const Register = () => (
  <div>
    <h2>Register Module</h2>
    <ul>
      <li><Link to="..">Back</Link></li>
      <li><Link to="admin">Admin Page</Link></li>
      <li><Link to="user">User Page</Link></li>
    </ul>
    <Routers />
  </div>
);

export default Register;
