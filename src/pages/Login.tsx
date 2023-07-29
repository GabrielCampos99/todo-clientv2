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

const Login = () => {
  const { handleSubmit, register } = useForm<LoginSchemaProps>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchemaProps> = (data) => console.log(data);
  return (
    <div className="max-w-7xl m-auto p-4">
      <Button bgColor="bg-transparent" size="sm" to="/" hasBorder>
        <ChevronLeft />
      </Button>
      <Typography variant="h1" className="font-bold text-white">
        Login
      </Typography>
      <LoginForm onSubmit={handleSubmit(onSubmit)} register={register} />
    </div>
  );
};

export default Login;
