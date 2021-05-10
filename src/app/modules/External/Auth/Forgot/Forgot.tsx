import { Link, Outlet, useMatch } from 'react-router-dom';

const Forgot = () => {
  const match = useMatch({ path: '/auth/forgot' });

  return (
    <div>
      <h3>Forgot Page</h3>
      <div>
        <ul>
          <li><Link to="..">Back</Link></li>
          <li><Link to="email">Email</Link></li>
          <li><Link to="password">Password</Link></li>
        </ul>
      </div>
      <div>
        {match && <p>Select type</p>}
        <Outlet />
      </div>
    </div>
  );
};

export default Forgot;
