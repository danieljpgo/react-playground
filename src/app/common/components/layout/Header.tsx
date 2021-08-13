import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h2>header</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="users">User</Link></li>
      </ul>
    </header>
  );
}
