import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { usePrivateModule } from '../common/components/PrivateModule/usePrivateModule';
import { AuthProvider, useAuth } from '../common/context/AuthContext';
import SuspenseWithDelay from '../common/layout/SuspenseWithDelay';

const External = React.lazy(() => import('./external'));
const Internal = React.lazy(() => import('./internal'));

const privateModulePaths = ['/', 'users'];

const Routers = () => {
  const [{ token }] = useAuth();
  const isAutenticated = Boolean(token);
  const auth = usePrivateModule(privateModulePaths, isAutenticated);

  return (
    <SuspenseWithDelay
      delay={300}
      fallback={<div>Loading Modules</div>}
    >
      {auth
        ? <Internal />
        : <External />}
    </SuspenseWithDelay>
  );
};

const Modules = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routers />
    </AuthProvider>
  </BrowserRouter>
);

export default Modules;
