import * as React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import SuspenseWithDelay from '../../common/components/SuspenseWithDelay';
import Header from '../../common/components/Header/Header';

const Users = React.lazy(() => import('./Users'));
const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'));

const Routers = () => (
  <Routes>
    <Route
      key="dashboard"
      path="/"
      element={(
        <SuspenseWithDelay delay={300} fallback={<div>Loading Dashboard</div>}>
          <Dashboard />
        </SuspenseWithDelay>
        )}
    />
    <Route
      key="users"
      path="users/*"
      element={(
        <SuspenseWithDelay delay={300} fallback={<div>Loading Users</div>}>
          <Users />
        </SuspenseWithDelay>
        )}
    />
    <Route path="/*" element={<Navigate to="." />} />
  </Routes>
);

const Internal = () => (
  <div>
    <Header />
    <main>
      <Routers />
    </main>
  </div>
);

export default Internal;
