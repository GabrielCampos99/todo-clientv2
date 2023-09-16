import { Outlet } from 'react-router-dom';
import TopNav from '../../components/Nav';
import BottomNav from '../../components/BottomNav';

const AppLayout = () => (
  <div className="flex flex-col min-h-screen">
    <TopNav />
    <div className="flex-1 flex flex-col justify-center">
      <Outlet />
    </div>
    <BottomNav />
  </div>
);

export default AppLayout;
