import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';
import Details from './Users/List/Details';
import Users from './Users';
import Dashboard from './Dashboard';

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
