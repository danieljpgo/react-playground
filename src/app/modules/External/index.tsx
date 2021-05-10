import * as React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import SuspenseWithDelay from '../../common/components/SuspenseWithDelay';

const Auth = React.lazy(() => import('./Auth'));
const Register = React.lazy(() => import('./Register'));

const Routers = () => (
  <Routes>
    <Route
      key="auth"
      path="auth/*"
      element={(
        <SuspenseWithDelay delay={300} fallback={<div>Loading Auth</div>}>
          <Auth />
        </SuspenseWithDelay>
        )}
    />
    <Route
      key="register"
      path="register/*"
      element={(
        <SuspenseWithDelay delay={300} fallback={<div>Loading Register</div>}>
          <Register />
        </SuspenseWithDelay>
        )}
    />
    <Route path="/*" element={<Navigate to="auth" />} />
  </Routes>
);

const External = () => (
  <main>
    <Routers />
  </main>
);

export default External;
