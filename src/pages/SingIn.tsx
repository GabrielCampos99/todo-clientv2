import { ChevronLeft } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Typography from '../components/Typography';

import Divider from '../components/Divider/Index';
import {
  SingInProps,
  SingInSchema,
} from '../types/schemas/singin/singInSchema';
import SingInForm from '../ui/forms/SingInForm';
import { useSingIn } from '../hooks/auth/useSingIn';

const SingIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SingInProps>({
    resolver: zodResolver(SingInSchema),
  });
  const { isLoading, singIn } = useSingIn();

  const onSubmit: SubmitHandler<SingInProps> = async (data) => {
    singIn(data);
  };
  return (
    <div className="max-w-7xl m-auto p-4">
      <Button bgColor="bg-transparent" size="sm" to="/login" hasBorder>
        <div className="flex">
          <ChevronLeft />
          Voltar
        </div>
      </Button>
      <Typography variant="h1" className="font-bold text-white">
        Cadastre-se
      </Typography>
      <SingInForm
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
          Já possui uma conta?
        </Typography>
        <Link to="/login">
          <Typography variant="p" className="text-lg text-white">
            Entre por aqui!
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default SingIn;
