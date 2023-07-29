import { FieldErrors, UseFormRegister } from 'react-hook-form';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { LoginSchemaProps } from '../../../types/schemas/login/loginSchema';

type LoginFormProps = {
  register: UseFormRegister<LoginSchemaProps>;
  errors: FieldErrors<LoginSchemaProps>;
} & React.FormHTMLAttributes<HTMLFormElement>;

const LoginForm = (props: LoginFormProps) => {
  const { register, errors, ...rest } = props;
  return (
    <form {...rest}>
      <Input
        label="Nome de usuário"
        type="text"
        placeholder="Digite o seu nome de usuário"
        containerClassName="mt-8"
        required
        error={errors?.username?.message}
        {...register('username')}
      />
      <Input
        label="Senha"
        type="password"
        placeholder="Digite a sua senha"
        containerClassName="mt-8"
        required
        error={errors?.password?.message}
        {...register('password')}
      />

      <Button fullWidth className="mt-12" type="submit">
        Confirmar
      </Button>
    </form>
  );
};

export default LoginForm;
