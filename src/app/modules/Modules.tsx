import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SuspenseWithDelay } from '../common/components/router';
import { Spinner } from '../common/components/layout';
import { usePrivateModule } from '../common/hooks';
import { AuthProvider } from '../common/context/authContext';

const External = React.lazy(() => import('./External/External'));
const Internal = React.lazy(() => import('./Internal/Internal'));

const privateModulePaths = ['/', 'users'];

function ModulesRouter() {
  const isAuthenticated = true;
  const auth = usePrivateModule(privateModulePaths, isAuthenticated);

  return (
    <SuspenseWithDelay delay={300} fallback={<Spinner />}>
      {auth
        ? <Internal />
        : <External />}
    </SuspenseWithDelay>
  );
}

export default function Modules() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ModulesRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}
