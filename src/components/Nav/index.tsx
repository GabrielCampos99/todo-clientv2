import { Menu, UserCircle2 } from 'lucide-react';
import Typography from '../Typography';
import { useToast } from '../Toast';

const TopNav = () => {
  const toast = useToast();
  const handleNotImplemented = () => {
    toast.showToast({
      title: 'Não implementado',
      message: 'Método ainda não implementado.',
      type: 'danger',
    });
  };
  return (
    <nav className="flex justify-between text-white p-3">
      <Menu
        size={28}
        onClick={handleNotImplemented}
        className="cursor-pointer"
      />
      <Typography variant="h4" className="font-bold">
        Principal
      </Typography>
      <UserCircle2
        size={28}
        onClick={handleNotImplemented}
        className="cursor-pointer"
      />
    </nav>
  );
};

export default TopNav;
