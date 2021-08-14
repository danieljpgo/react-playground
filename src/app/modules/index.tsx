import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SuspenseWithDelay } from '../common/components/router';
import { Spinner } from '../common/components/layout';
import { usePrivateModule } from '../common/hooks';

const External = React.lazy(() => import('./External'));
const Internal = React.lazy(() => import('./Internal'));

const privateModulePaths = ['/', 'users'];

function ModuleRouter() {
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
      <ModuleRouter />
    </BrowserRouter>
  );
}