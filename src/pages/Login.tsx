import { ChevronLeft } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
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
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginSchemaProps>({
    resolver: zodResolver(LoginSchema),
  });
  const { isLoading, login } = useLogin();

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
      <LoginForm
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
        isLoading={isLoading}
      />

      <Divider className="mt-8">
        <Typography variant="p" className="text-xl text-white mx-2">
          ou
        </Typography>
      </Divider>

      <div className="flex justify-center mt-8 flex-wrap items-center gap-1 mb-8">
        <Typography variant="p" className="text-slate-300 text-lg">
          Não possui conta?
        </Typography>
        <Link to="/signin">
          <Typography variant="p" className="text-lg text-white">
            Registre-se aqui!
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default Login;
