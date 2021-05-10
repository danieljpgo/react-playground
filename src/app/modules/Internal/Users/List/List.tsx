import { Outlet } from 'react-router-dom';

const List = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 16 }}>
    <div>List</div>
    <div>
      <Outlet />
    </div>
  </div>
);

export default List;
