import { useLocation } from 'react-router-dom';

type PrivatePaths = string[];

const usePrivateModule = (privatePaths: PrivatePaths, isAuthenticated: boolean) => {
  const location = useLocation();
  const isInternal = privatePaths.find((path) => path === location.pathname) && isAuthenticated;

  return Boolean(isInternal);
};

export { usePrivateModule };
