import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h2>header</h2>
    <ul>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="users">User</Link></li>
    </ul>
  </header>
);

export default Header;
