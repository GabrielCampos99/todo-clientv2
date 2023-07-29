import { ChevronLeft } from 'lucide-react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import LoginForm from '../ui/forms/LoginForm';

const Login = () => {
  const a = '';

  return (
    <div className="max-w-7xl m-auto p-4">
      <Button bgColor="bg-transparent" size="sm" to="/" hasBorder>
        <ChevronLeft />
      </Button>
      <Typography variant="h1" className="font-bold text-white">
        Login
      </Typography>
      <LoginForm />
    </div>
  );
};

export default Login;
