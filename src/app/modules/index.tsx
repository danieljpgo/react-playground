import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { usePrivateModule } from '../common/utils/hooks';
import SuspenseWithDelay from '../common/components/SuspenseWithDelay';

const External = React.lazy(() => import('./External'));
const Internal = React.lazy(() => import('./Internal'));

const privateModulePaths = ['/', 'users'];

const Routers = () => {
  const isAuthenticated = true;
  const auth = usePrivateModule(privateModulePaths, isAuthenticated);

  return (
    <SuspenseWithDelay delay={300} fallback={<div>Loading Modules</div>}>
      {auth
        ? <Internal />
        : <External />}
    </SuspenseWithDelay>
  );
};

const Modules = () => (
  <BrowserRouter>
    <Routers />
  </BrowserRouter>
);

export default Modules;
