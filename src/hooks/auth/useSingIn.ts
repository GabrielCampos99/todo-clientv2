import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../components/Toast';
import { SingInProps } from '../../types/schemas/singin/singInSchema';
import { singInService } from '../../services/auth/apiAuth';

export const useSingIn = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const { mutate: singIn, isLoading } = useMutation({
    mutationFn: (props: SingInProps) => singInService(props),

    onSuccess: (user) => {
      console.log(user);
      //@TODO Add this info in localStorage or something...
      toast.showToast({
        message: 'Sucesso ao criar um usuário',
        type: 'success',
        title: 'Cadastro',
      });
      navigate('/login', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.showToast({
        message: 'Erro ao cadastrar usuário',
        type: 'danger',
        title: 'Cadastro',
      });
    },
  });
  return { isLoading, singIn };
};
