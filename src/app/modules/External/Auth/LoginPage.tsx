import { useNavigate, Link } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  function handleLoginUser() {
    navigate('/');
  }

  return (
    <div>
      <h3>Login Page</h3>
      <ul>
        <li><Link to="../forgot">Forgot Page</Link></li>
        <li><Link to="../../register">Register Module</Link></li>
      </ul>
      <button type="button" onClick={() => handleLoginUser()}>
        Login
      </button>
    </div>
  );
}
