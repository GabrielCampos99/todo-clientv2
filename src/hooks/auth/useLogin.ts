import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../components/Toast';
import { loginService } from '../../services/auth/apiAuth';
import { LoginSchemaProps } from '../../types/schemas/login/loginSchema';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const toast = useToast();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: (props: LoginSchemaProps) => loginService(props),

    onSuccess: (user) => {
      console.log(user);
      //@TODO Add this info in localStorage or something...
      queryClient.setQueryData(['user'], user);
      navigate('/tarefas', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.showToast({
        message: 'Usuario ou senha incorretos.',
        type: 'danger',
        title: 'Login',
      });
    },
  });
  return { isLoading, login };
};
