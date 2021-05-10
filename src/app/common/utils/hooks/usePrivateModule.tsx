import { useLocation } from 'react-router-dom';

export const usePrivateModule = (privatePaths: string[], isAuthenticated: boolean) => {
  const location = useLocation();
  const isInternal = privatePaths.find((path) => path === location.pathname) && isAuthenticated;

  return Boolean(isInternal);
};
