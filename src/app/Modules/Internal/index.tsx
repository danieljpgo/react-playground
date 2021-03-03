import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Users from './Users';
import Details from './Users/List/Details';

const Internal = () => (
  <BrowserRouter>
    <Routes>
      <Route
        key="dashboard"
        path="/"
        element={<Dashboard />}
      />
      <Route
        key="users"
        path="users"
        element={<Users />}
      >
        <Route
          key="details"
          path=":id"
          element={<Details />}
        />
      </Route>
      <Route
        path="/*"
        element={<Navigate to="/" />}
      />
    </Routes>
  </BrowserRouter>

);

export default Internal;
