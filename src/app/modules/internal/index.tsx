import * as React from 'react';
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';

const Users = React.lazy(() => import('./users'));
const Dashboard = React.lazy(() => import('./dashboard/Dashboard'));

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route key="dashboard" path="/" element={<Dashboard />} />
      <Route key="users" path="users/*" element={<Users />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

const Internal = () => (
  <Routers />
);

export default Internal;
