import {
  Route, BrowserRouter, Routes, Navigate,
} from 'react-router-dom';
import Auth from './Auth';
import Login from './Auth/Login';
import Welcome from './Auth/Welcome';

const External = () => (
  <BrowserRouter>
    <Routes>
      <Route key="auth" path="auth" element={<Auth />}>
        <Route
          key="welcome"
          path="welcome"
          element={<Welcome />}
        />
        <Route
          key="login"
          path="login"
          element={<Login />}
        />
        {/* @TODO Caso caia na rota default, será redirecionada para a rota welcome */}
        <Route
          path="/"
          element={<Navigate to="welcome" />}
        />
        {/* @TODO Caso não encontre a rota, será redirecionado para a rota welcome */}
        <Route
          path="/*"
          element={<Navigate to="welcome" />}
        />
      </Route>
      {/* @TODO Caso não encontre nenhuma rota, será redirecionado para a rota auth */}
      <Route
        path="/*"
        element={<Navigate to="auth" />}
      />
    </Routes>
  </BrowserRouter>
);

export default External;
