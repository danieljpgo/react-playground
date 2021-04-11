import { Link, Outlet } from 'react-router-dom';

const ForgotPassword = () => (
  <div>
    <h2>Forgot</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <div>
        <Link to="email">Email</Link>
        <Link to="password">Password</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  </div>
);

export default ForgotPassword;
