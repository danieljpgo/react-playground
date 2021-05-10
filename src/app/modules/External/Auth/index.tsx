import { Navigate, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Forgot from './Forgot/Forgot';
import Email from './Forgot/Email/Email';
import Password from './Forgot/Password/Password';

const Routers = () => (
  <Routes>
    <Route key="login" path="login" element={<Login />} />
    <Route key="forgot" path="forgot" element={<Forgot />}>
      <Route key="email" path="email" element={<Email />} />
      <Route key="password" path="password" element={<Password />} />
    </Route>
    <Route key="default" path="/" element={<Navigate to="login" />} />
    <Route key="not-found" path="/*" element={<Navigate to="login" />} />
  </Routes>
);

const Auth = () => (
  <div>
    <h2>Auth Module</h2>
    <Routers />
  </div>
);

export default Auth;
