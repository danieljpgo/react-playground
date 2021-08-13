import { Outlet } from 'react-router-dom';

export default function UsersPage() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 16 }}>
      <section>List</section>
      <aside>
        <Outlet />
      </aside>
    </div>
  );
}
