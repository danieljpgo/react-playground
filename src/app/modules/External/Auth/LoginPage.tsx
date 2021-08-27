import { useNavigate, Link } from 'react-router-dom';
import { useLogin } from '../../../common/context/authContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const login = useLogin();

  async function handleLogin() {
    await login({ login: 'teste@gmai.com', password: '123456' });
    navigate('/');
  }

  return (
    <div>
      <h3>Login Page</h3>
      <ul>
        <li><Link to="../forgot">Forgot Page</Link></li>
        <li><Link to="../../register">Register Module</Link></li>
      </ul>
      <button type="button" onClick={() => handleLogin()}>
        Login
      </button>
    </div>
  );
}
