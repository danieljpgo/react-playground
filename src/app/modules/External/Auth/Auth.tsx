import { Navigate, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import ForgotPage from './ForgotPage';
import ForgotEmail from './ForgotEmail';
import ForgotPassword from './ForgotPassword';

function AuthRouter() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="forgot" element={<ForgotPage />}>
        <Route path="email" element={<ForgotEmail />} />
        <Route path="password" element={<ForgotPassword />} />
      </Route>
      <Route path="/" element={<Navigate to="login" />} />
      <Route path="/*" element={<Navigate to="login" />} />
    </Routes>
  );
}

export default function Auth() {
  return (
    <div>
      <h2>Auth Module</h2>
      <AuthRouter />
    </div>
  );
}
