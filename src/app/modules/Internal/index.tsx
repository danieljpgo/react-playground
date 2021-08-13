import * as React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { SuspenseWithDelay } from '../../common/components/router';
import { Header, Spinner } from '../../common/components/layout';

const Users = React.lazy(() => import('./Users'));
const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'));

function InternalRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <SuspenseWithDelay delay={300} fallback={<Spinner />}>
            <Dashboard />
          </SuspenseWithDelay>
        )}
      />
      <Route
        path="users/*"
        element={(
          <SuspenseWithDelay delay={300} fallback={<Spinner />}>
            <Users />
          </SuspenseWithDelay>
        )}
      />
      <Route path="/*" element={<Navigate to="." />} />
    </Routes>
  );
}

export default function Internal() {
  return (
    <div>
      <Header />
      <main>
        <InternalRouter />
      </main>
    </div>
  );
}
