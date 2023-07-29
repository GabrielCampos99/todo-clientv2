import Button from '../../../components/Button';
import Input from '../../../components/Input';

const LoginForm = () => (
  <form>
    <Input
      label="Nome de usuário"
      type="text"
      placeholder="Digite o seu nome de usuário"
      containerClassName="mt-8"
      required
    />
    <Input
      label="Senha"
      type="password"
      placeholder="Digite a sua senha"
      containerClassName="mt-8"
      required
    />

    <Button fullWidth className="mt-12" type="submit">
      Confirmar
    </Button>
  </form>
);

export default LoginForm;
