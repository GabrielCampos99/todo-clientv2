import { Outlet } from 'react-router-dom';
import TopNav from '../../components/Nav';
import BottomNav from '../../components/BottomNav';

const AppLayout = () => (
  <div className="flex flex-col h-screen">
    <TopNav />
    <div className="grow overflow-y-auto">
      <Outlet />
    </div>
    <BottomNav />
  </div>
);

export default AppLayout;
