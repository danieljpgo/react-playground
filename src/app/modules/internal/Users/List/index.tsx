import { Outlet } from 'react-router-dom';

const List = () => (
  <div style={{ display: 'flex' }}>
    <div>List</div>
    <div><Outlet /></div>
  </div>
);

export default List;
