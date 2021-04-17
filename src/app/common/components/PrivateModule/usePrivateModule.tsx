import { useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

type PrivatePaths = string[];

const usePrivateModule = (privatePaths: PrivatePaths) => {
  const location = useLocation();
  const [{ token }] = useAuth();

  const isInternal = Boolean(privatePaths.find((path) => path === location.pathname) && token);

  return isInternal;
};

export { usePrivateModule };
