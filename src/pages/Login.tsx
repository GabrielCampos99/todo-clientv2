import { ChevronLeft } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../components/Button';
import Typography from '../components/Typography';
import LoginForm from '../ui/forms/LoginForm';
import {
  LoginSchema,
  LoginSchemaProps,
} from '../types/schemas/login/loginSchema';
import { useLogin } from '../hooks/auth/useLogin';
import Divider from '../components/Divider/Index';

const Login = () => {
  const { handleSubmit, register } = useForm<LoginSchemaProps>({
    resolver: zodResolver(LoginSchema),
  });
  const { login } = useLogin();

  const onSubmit: SubmitHandler<LoginSchemaProps> = async (data) => {
    login(data);
  };
  return (
    <div className="max-w-7xl m-auto p-4">
      <Button bgColor="bg-transparent" size="sm" to="/" hasBorder>
        <ChevronLeft />
      </Button>
      <Typography variant="h1" className="font-bold text-white">
        Login
      </Typography>
      <LoginForm onSubmit={handleSubmit(onSubmit)} register={register} />

      <Divider className="mt-8">
        <Typography variant="p" className="text-xl text-white mx-2">
          ou
        </Typography>
      </Divider>
    </div>
  );
};

export default Login;
