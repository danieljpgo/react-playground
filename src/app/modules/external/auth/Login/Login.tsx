import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../common/context/AuthContext';

const Login = () => {
  const [, dispatch] = useAuth();
  const navigate = useNavigate();

  function handleLoginUser() {
    dispatch({ type: 'login', token: 'teste' });
    navigate('/');
  }

  return (
    <div>
      Login
      <button type="button" onClick={() => handleLoginUser()}>
        Login
      </button>
    </div>
  );
};

export default Login;
