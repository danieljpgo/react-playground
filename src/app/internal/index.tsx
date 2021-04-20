import * as React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Header from '../common/layout/Navigation/Header';
import SuspenseWithDelay from '../common/layout/SuspenseWithDelay/SuspenseWithDelay';

const Users = React.lazy(() => import('./users'));
const Dashboard = React.lazy(() => import('./dashboard/Dashboard'));

const Routers = () => (
  <Routes>
    <Route
      key="dashboard"
      path="/"
      element={(
        <SuspenseWithDelay
          delay={300}
          fallback={<div>Loading Dashboard</div>}
        >
          <Dashboard />
        </SuspenseWithDelay>
        )}
    />
    <Route
      key="users"
      path="users/*"
      element={(
        <SuspenseWithDelay
          delay={300}
          fallback={<div>Loading Users</div>}
        >
          <Users />
        </SuspenseWithDelay>
        )}
    />
    <Route path="/*" element={<Navigate to="." />} />
  </Routes>
);

const Internal = () => (
  <>
    <Header />
    <main>
      <Routers />
    </main>
  </>
);

export default Internal;
