import * as React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { SuspenseWithDelay } from '../../common/components/router';
import { Spinner } from '../../common/components/layout';

const Auth = React.lazy(() => import('./Auth'));
const Register = React.lazy(() => import('./Register'));

function ExternalRouter() {
  return (
    <Routes>
      <Route
        key="auth"
        path="auth/*"
        element={(
          <SuspenseWithDelay delay={300} fallback={<Spinner />}>
            <Auth />
          </SuspenseWithDelay>
        )}
      />
      <Route
        key="register"
        path="register/*"
        element={(
          <SuspenseWithDelay delay={300} fallback={<Spinner />}>
            <Register />
          </SuspenseWithDelay>
        )}
      />
      <Route path="/*" element={<Navigate to="auth" />} />
    </Routes>
  );
}

export default function External() {
  return (
    <main>
      <ExternalRouter />
    </main>
  );
}
