import { Navigate, Route, Routes } from 'react-router-dom';
import RegisterAdmin from './RegisterAdmin/RegisterAdmin';
import RegisterUser from './RegisterUser/RegisterUser';

const Routers = () => (
  <Routes>
    <Route key="admin" path="admin" element={<RegisterAdmin />} />
    <Route key="user" path="user" element={<RegisterUser />} />
    <Route key="default" path="/" element={<Navigate to="user" />} />
    <Route key="not-found" path="/*" element={<Navigate to="user" />} />
  </Routes>
);

const Register = () => (
  <div>
    <h2>Register</h2>
    <Routers />
  </div>
);

export default Register;
