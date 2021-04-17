import { Navigate } from 'react-router-dom';
import { Children } from '../../types/children';
import { useAuth } from '../../context/AuthContext';

type PrivateRouteProps = Children;

// @TODO ajustar auth
const PrivateRoute = (props: PrivateRouteProps) => {
  const { children } = props;
  const [auth] = useAuth();

  return (
    <>
      {auth
        ? children
        : <Navigate to="login" />}
    </>
  );
};

export default PrivateRoute;
