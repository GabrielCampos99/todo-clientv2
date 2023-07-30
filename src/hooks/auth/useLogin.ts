import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../components/Toast';
import { loginService } from '../../services/auth/apiAuth';
import { LoginSchemaProps } from '../../types/schemas/login/loginSchema';
import { storeJWT } from '../../utils/jwt/jwt.ts';

export const useLogin = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: (props: LoginSchemaProps) => loginService(props),

    onSuccess: (user) => {
      console.log(user);
      storeJWT(user);
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
